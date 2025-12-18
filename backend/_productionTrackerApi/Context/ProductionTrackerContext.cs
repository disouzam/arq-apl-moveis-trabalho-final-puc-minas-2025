using Microsoft.EntityFrameworkCore;

using productionTrackerApi.Models;

using static System.Net.WebRequestMethods;

namespace productionTrackerApi.Context;

public class ProductionTrackerContext : DbContext
{
    public ProductionTrackerContext() { }

    public ProductionTrackerContext(DbContextOptions<ProductionTrackerContext> options) : base(options) { }

    public DbSet<ProductionOrder> ProductionOrders { get; set; }

    public DbSet<Step> Steps { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.EnableSensitiveDataLogging();
    }

    /// <summary>
    /// Definition of data model using Fluent API (as opposed to Data Annotations)
    /// </summary>
    /// <param name="modelBuilder"></param>
    /// <remarks>
    /// <a href="https://learn.microsoft.com/en-us/ef/core/modeling/indexes?tabs=fluent-api"/>
    /// </remarks>
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<ProductionOrder>(entity =>
        {
            entity.HasKey(e => e.Id)
            .HasName("PK_ProductionOrder_ProductionOrderId")
            .IsClustered(false);

            entity.Property(e => e.Id)
            .HasMaxLength(10)
            .HasColumnType("varchar(10)");

            entity.HasMany(po => po.Steps)
            .WithOne(s => s.ProductionOrder)
            .OnDelete(DeleteBehavior.NoAction);
        });

        modelBuilder.Entity<Step>(entity =>
        {
            entity.HasKey(e => e.Id)
            .HasName("PK_Step_StepId")
            .IsClustered(false);

            entity.Property(e => e.Id)
            .HasColumnType("int");

            entity.Property(e => e.Name)
            .HasMaxLength(50)
            .HasColumnType("varchar(50)");

            entity.Property(e => e.Start)
            .HasColumnType("datetime")
            .IsRequired(false);

            entity.Property(e => e.End)
            .HasColumnType("datetime")
            .IsRequired(false);

            entity
            .ToTable(tb => tb.HasCheckConstraint("CK_End_After_Start", "[End] > [Start]"));

            entity.HasOne(s => s.ProductionOrder)
            .WithMany(po => po.Steps)
            .OnDelete(DeleteBehavior.NoAction);
        });
    }
}
