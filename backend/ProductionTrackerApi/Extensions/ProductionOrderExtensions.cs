using System;

using Dto = ProductionTrackerApi.DataTransferObjects;
using Model = ProductionTrackerApi.Models;

namespace ProductionTrackerApi.Extensions;

public static class ProductionOrderExtensions
{
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
