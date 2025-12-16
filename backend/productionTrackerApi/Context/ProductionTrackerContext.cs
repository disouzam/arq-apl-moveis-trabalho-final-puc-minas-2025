using Microsoft.EntityFrameworkCore;

using productionTrackerApi.Models;

namespace productionTrackerApi.Context;

public class ProductionTrackerContext : DbContext
{
    public ProductionTrackerContext() { }

    public ProductionTrackerContext(DbContextOptions<ProductionTrackerContext> options) : base(options) { }

    public DbSet<ProductionOrder> ProductionOrders { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.EnableSensitiveDataLogging();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}
