using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

using ProductionTrackerApi.Context;
using ProductionTrackerApi.Extensions;
using ProductionTrackerApi.Models;

namespace ProductionTrackerApi.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductionOrderController : ControllerBase
{
    private readonly ILogger<ProductionOrderController> _logger;
    private readonly ProductionTrackerContext _context;

    public ProductionOrderController(ILogger<ProductionOrderController> logger, ProductionTrackerContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet(Name = "GetProductionOrders")]
    public IEnumerable<DataTransferObjects.ProductionOrder> Get()
    {
        var productionOrders = _context.ProductionOrders
            .Where(po => true)
            .Include(po => po.Steps)
            .ToList();

        var response = new List<DataTransferObjects.ProductionOrder>();

        foreach(var productionOrder in productionOrders)
        {
            response.Add(productionOrder.ConvertToProductionOrderDto());
        }

        return response;
    }
}
