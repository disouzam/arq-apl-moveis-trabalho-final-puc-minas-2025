using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

using ProductionTrackerApi.Context;
using ProductionTrackerApi.Extensions;

using Dto = ProductionTrackerApi.DataTransferObjects;

namespace ProductionTrackerApi.Controllers;

/// <summary>
/// Controller for Production Order endpoints
/// </summary>
[ApiController]
[Route("[controller]")]
public class ProductionOrderController : ControllerBase
{
    private readonly ILogger<ProductionOrderController> _logger;
    private readonly ProductionTrackerContext _context;

    /// <summary>
    /// Constructor for Dependency Injection container 
    /// </summary>
    /// <param name="logger">Logger instance</param>
    /// <param name="context">Instance of database context</param>
    public ProductionOrderController(ILogger<ProductionOrderController> logger, ProductionTrackerContext context)
    {
        _logger = logger;
        _context = context;
    }

    /// <summary>
    /// Endpoint to get all production orders
    /// </summary>
    /// <returns></returns>
    [HttpGet(Name = "GetProductionOrders")]
    public IEnumerable<Dto.ProductionOrder> Get()
    {
        var productionOrders = _context.ProductionOrders
            .Where(po => true)
            .Include(po => po.Steps)
            .ToList();

        var response = new List<Dto.ProductionOrder>();

        foreach(var productionOrder in productionOrders)
        {
            response.Add(productionOrder.ConvertToProductionOrderDto());
        }

        return response;
    }
}
