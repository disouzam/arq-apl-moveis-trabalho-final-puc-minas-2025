using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

using productionTrackerApi.Context;
using productionTrackerApi.Models;

namespace productionTrackerApi.Controllers;

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
    public IEnumerable<ProductionOrder> Get()
    {
        var productionOrders = _context.ProductionOrders
            .Where(po => true)
            .Include(po => po.Steps)
            .ToList();

        if(productionOrders == null)
        {
            return new List<ProductionOrder>();
        }

        return productionOrders;
    }
}
