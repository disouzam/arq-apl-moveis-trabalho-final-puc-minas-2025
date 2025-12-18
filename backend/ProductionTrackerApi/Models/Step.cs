using System;

namespace ProductionTrackerApi.Models;

public class Step
{
    public int Id { get; set; }

    public string Name { get; set; }

    public DateTime? Start { get; set; }

    public DateTime? End { get; set; }

    public string ProductionOrderId { get; set; }

    public ProductionOrder ProductionOrder { get; set; }
}