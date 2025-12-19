using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

using ProductionTrackerApi.Models;

namespace ProductionTrackerApi.DataTransferObjects;

/// <summary>
/// A data transfer object for Production Orders
/// </summary>
public class ProductionOrder
{
    /// <summary>
    /// Id of the production order
    /// </summary>
    public string Id { get; set; }

    /// <summary>
    /// State of production order
    /// </summary>
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public ProductionOrderState State { get; set; }

    /// <summary>
    /// A list with names of production process steps
    /// </summary>
    public List<string> StepNames { get; set; }

    /// <summary>
    /// A list with start times of all production process steps
    /// </summary>
    public List<DateTime> StartTimes { get; set; }

    /// <summary>
    /// A list with end times of all production process steps
    /// </summary>
    public List<DateTime> EndTimes { get; set; }

    /// <summary>
    /// Parameterless constructor to initialize list properties
    /// </summary>
    public ProductionOrder()
    {
        StepNames = new List<string>();
        StartTimes = new List<DateTime>();
        EndTimes = new List<DateTime>();
    }
}
