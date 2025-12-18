using System;
using System.Collections.Generic;

namespace ProductionTrackerApi.DataTransferObjects;

public class ProductionOrder
{
    public string Id { get; set; }

    public List<string> StepNames { get; set; }

    public List<DateTime> StartTimes { get; set; }

    public List<DateTime> EndTimes { get; set; }

    public ProductionOrder()
    {
        StepNames = new List<string>();
        StartTimes = new List<DateTime>();
        EndTimes = new List<DateTime>();
    }
}
