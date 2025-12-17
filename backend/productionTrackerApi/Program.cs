using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;

using productionTrackerApi.Context;

namespace productionTrackerApi;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllers();
        builder.Services.AddSwaggerGen(options =>
        {
            options.SwaggerDoc("v1", new OpenApiInfo
            {
                Version = "v1",
                Title = "Production Tracker API",
                Description = "An ASP.NET Core Web API for managing Production orders and tracking information",
            });
        });

        builder.Services.AddDbContext<ProductionTrackerContext>(options =>
        {
            var connString = @"Data Source=LAPTOPDICKSON\SQL2022DEVELOPER;Initial Catalog=production-tracker;Integrated Security=True;Trusted_Connection=True;TrustServerCertificate=True;MultipleActiveResultSets=true;ConnectRetryCount=3";

            // Source - https://stackoverflow.com/questions/63830786/is-enableretryonfailure-valid-way-for-solving-database-deadlocks-does-it-have/78453897#78453897
            options.UseSqlServer(connString, options => options.EnableRetryOnFailure());
        });

        var app = builder.Build();

        // get the context from the service collection
        using(var scope = app.Services.CreateScope())
        {
            var context = scope.ServiceProvider.GetRequiredService<ProductionTrackerContext>();
            app.MigrateAndSeed(context);
        }

        // Configure the HTTP request pipeline.
        if(app.Environment.IsDevelopment())
        {
            app.UseSwagger(c => { c.OpenApiVersion = Microsoft.OpenApi.OpenApiSpecVersion.OpenApi3_0; });
            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
                options.RoutePrefix = string.Empty;
                options.DefaultModelsExpandDepth(-1);
            });
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }
}
