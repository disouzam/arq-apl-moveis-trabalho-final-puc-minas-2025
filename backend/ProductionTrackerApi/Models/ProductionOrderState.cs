using ProductionTrackerApi.Converters;

namespace ProductionTrackerApi.Models;

/// <summary>
/// Enumeration to describe the discrete states of a production order
/// </summary>
public enum ProductionOrderState
{
    /// <summary>
    /// Pending approval / configuration. Same as not released to start in production process
    /// </summary>
    [SQLTextDescription("PENDING")]
    PENDING = 0,

    /// <summary>
    /// Fully approved and can be scheduled to start in production process
    /// </summary>
    [SQLTextDescription("APPROVED")]
    APPROVED = 1,

    /// <summary>
    /// All due steps were completed and the start / end times are recorded
    /// </summary>
    [SQLTextDescription("COMPLETED")]
    COMPLETED = 2
}
