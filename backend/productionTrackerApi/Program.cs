using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
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
            options.UseSqlServer("Server=LAPTOPDICKSON\\SQL2022DEVELOPER;Database=production-tracker;Trusted_Connection=True;TrustServerCertificate=True;MultipleActiveResultSets=true");
        });

        var app = builder.Build();

        // get the context from the service collection
        using(var scope = app.Services.CreateScope())
        {
            var context = scope.ServiceProvider.GetRequiredService<ProductionTrackerContext>();
            context.Database.EnsureCreated(); 
            context.Database.OpenConnection();
        }   

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
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
