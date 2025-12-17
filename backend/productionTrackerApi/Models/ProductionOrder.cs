using System;
using System.Collections.Generic;

namespace productionTrackerApi.Models;

public class ProductionOrder
{
    public string Id { get; set; }

    public List<Step> Steps { get; set;}
}
