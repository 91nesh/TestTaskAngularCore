using BusinessLayer.Domain;
using BusinessLayer.Parsers;
using BusinessLayer.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using TestTask.Models;

namespace TestTask.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RobotController : ControllerBase
    {
        private readonly INavigationService _navigationService;
        public RobotController(INavigationService navigationService) =>_navigationService = navigationService;

        [HttpPost]
        public IActionResult StartExploration([FromBody] RobotViewModel models)
        {
            try
            {
                var results = new List<Position>();
                PositionAvoid.positionsToAvoid = new List<Constant>();
                Plateau plateau = new Plateau(models.Height, models.Length);
                foreach (var model in models.PositionViewModels)
                {
                    var position = new Position { X = model.X, Y = model.Y, Direction = DirectionParser.Parse(model.Direction) };
                    var robot = new Robot(position);
                    results.Add(_navigationService.ExploreTerrain(plateau, robot, CommandParser.Parse(model.Movements)));
                }

                return Ok(
                    results.Select(x => new
                    {
                        res = $"{x.X} {x.Y} {x.Direction} {x.ErrorMessage ?? ""}"
                    }).ToList()
                );
            }
            catch (Exception exp)
            {
                return BadRequest(new { Message = exp.Message }) ;
            }
        }
    }
}
