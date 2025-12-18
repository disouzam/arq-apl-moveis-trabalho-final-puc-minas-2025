using System;

namespace ProductionTrackerApi.Extensions;

public static class ProductionOrderExtensions
{
    public static DataTransferModels.ProductionOrder ConvertToProductionOrderDto(this Models.ProductionOrder productionOrderModel)
    {
        var dto = new DataTransferModels.ProductionOrder();
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
