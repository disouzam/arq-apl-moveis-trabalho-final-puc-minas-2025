using System;

namespace productionTrackerApi.Models;

public class ProductionOrder
{
    public string Id { get; set; }

    public  string[] StepName { get; set; }

    public DateTime[] Start { get; set; }

    public DateTime[] End { get; set; }

}
