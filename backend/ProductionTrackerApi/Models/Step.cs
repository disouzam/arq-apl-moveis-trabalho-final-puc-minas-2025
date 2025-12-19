using System;

namespace ProductionTrackerApi.Models;

/// <summary>
/// Step model / entity
/// </summary>
/// <remarks>Represents discrete part of production process</remarks>
public class Step
{
    /// <summary>
    /// Database-generated Id of a step
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Descriptive name of production process step (like welding, assembling, heat treating, boring out, lathing)
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Start time of current step
    /// </summary>
    public DateTime? Start { get; set; }

    /// <summary>
    /// End time of current step
    /// </summary>
    public DateTime? End { get; set; }

    /// <summary>
    /// Id of production order to which this step is linked to
    /// </summary>
    public string ProductionOrderId { get; set; }

    /// <summary>
    /// Production order navigation property
    /// </summary>
    public ProductionOrder ProductionOrder { get; set; }
}
