using System;

using Dto = ProductionTrackerApi.DataTransferObjects;
using Model = ProductionTrackerApi.Models;

namespace ProductionTrackerApi.Extensions;

/// <summary>
/// Set of extensions to deal with Production Order type conversions
/// </summary>
public static class ProductionOrderExtensions
{
    /// <summary>
    /// Convert a production order model / database entity into a corresponding data transfer object to be sent as endpoint response
    /// </summary>
    /// <param name="productionOrderModel">A instance of production order model to be converted</param>
    /// <returns>The representation of production order as a data transfer object</returns>
    public static Dto.ProductionOrder ConvertToProductionOrderDto(
        this Model.ProductionOrder productionOrderModel)
    {
        var dto = new Dto.ProductionOrder();
         dto.Id = productionOrderModel.Id;

        foreach(var step in productionOrderModel.Steps) {
            dto.StepNames.Add(step.Name);

            if (step.Start != null)
            {
                var startTime = (DateTime)step.Start;
                dto.StartTimes.Add(startTime);
            }

            if(step.End != null)
            {
                var endTime= (DateTime)step.End;
                dto.EndTimes.Add(endTime);
            }
        }

        return dto;
    }
}
