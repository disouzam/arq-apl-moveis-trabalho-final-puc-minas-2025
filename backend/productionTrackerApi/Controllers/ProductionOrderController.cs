using System;
using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using productionTrackerApi.Models;

namespace productionTrackerApi.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductionOrderController : ControllerBase
{
    private static readonly List<ProductionOrder> ProductionOrderExample = new List<ProductionOrder>()
    {
        new ProductionOrder()
        {
            Id= "9296188434",
            StepName=["Corte"],
            Start=[new DateTime(2025,11,8,12,45,0)],
            End=[]
        }
    };

    private readonly ILogger<ProductionOrderController> _logger;

    public ProductionOrderController(ILogger<ProductionOrderController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetProductionOrders")]
    public IEnumerable<ProductionOrder> Get()
    {
        return ProductionOrderExample;
    }
}
