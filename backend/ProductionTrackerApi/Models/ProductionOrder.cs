using System;
using System.Collections.Generic;

namespace ProductionTrackerApi.Models;

/// <summary>
/// Production order model / entity
/// </summary>
public class ProductionOrder
{
    /// <summary>
    /// Id of production order
    /// </summary>
    /// <remarks>Must be unique but it is not database generated</remarks>
    public string Id { get; set; }

    /// <summary>
    /// Indicate the state of current production order
    /// </summary>
    public ProductionOrderState State { get; set; }

    /// <summary>
    /// List of step information linked to current production order
    /// </summary>
    public List<Step> Steps { get; set;}
}
