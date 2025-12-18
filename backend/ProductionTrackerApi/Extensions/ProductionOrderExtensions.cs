using System;

namespace ProductionTrackerApi.Extensions;

public static class ProductionOrderExtensions
{
    public static DataTransferObjects.ProductionOrder ConvertToProductionOrderDto(this Models.ProductionOrder productionOrderModel)
    {
        var dto = new DataTransferObjects.ProductionOrder();
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
