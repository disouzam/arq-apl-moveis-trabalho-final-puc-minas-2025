using System;
using System.Linq;

using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

using ProductionTrackerApi.Context;
using ProductionTrackerApi.Models;

namespace ProductionTrackerApi;

/// <summary>
/// Helper class to perform migrations on startup and seed database when necessary
/// </summary>
public static class DatabaseMigration
{
    /// <summary>
    /// Perform migration of database schema and seed if when empty
    /// </summary>
    /// <param name="app">Instance of application running</param>
    /// <param name="context">Instance of database context</param>
    public static void MigrateAndSeed(this WebApplication app, ProductionTrackerContext context)
    {
        context.Database.Migrate();

        if(!context.ProductionOrders.Any())
        {
            Seed(app, context);
        }
    }

    private static void Seed(WebApplication app, ProductionTrackerContext context)
    {
        using(var serviceScope = app.Services.CreateScope())
        {
            ProductionOrder productionOrder = new ProductionOrder()
            {
                Id = "9875631480"
            };

            context.ProductionOrders.Add(productionOrder);
            context.SaveChanges();

            Step corte = new Step()
            {
                Name = "Corte",
                ProductionOrderId = productionOrder.Id,
                Start = new DateTime(2025, 12, 16, 08, 45, 00),
                End = new DateTime(2025, 12, 16, 09, 15, 00)
            };

            Step lixamento = new Step()
            {
                Name = "Lixamento",
                ProductionOrderId = productionOrder.Id,
                Start = new DateTime(2025, 12, 16, 09, 20, 00),
                End = new DateTime(2025, 12, 16, 10, 20, 00)
            };

            Step soldagem= new Step()
            {
                Name = "Soldagem",
                ProductionOrderId = productionOrder.Id,
                Start = new DateTime(2025, 12, 16, 13, 00, 00),
                End = new DateTime(2025, 12, 16, 17, 20, 00)
            };

            context.Steps.AddRange([corte, lixamento, soldagem]);
            context.SaveChanges();
        }
    }
}
