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
        private readonly INavigationService m_navigationService;
        public RobotController(INavigationService navigationService) => m_navigationService = navigationService;

        [HttpPost]
        public JsonResult StartExploration([FromBody] RobotViewModel models)
        {
            try
            {
                var results = new List<Position>();
                NavigationService nvgService = new NavigationService();
                PositionAvoid.positionsToAvoid = new List<Constant>();
                Plateau plateau = new Plateau(models.Height, models.Length);
                foreach (var model in models.PositionViewModels)
                {
                    var position = new Position { X = model.X, Y = model.Y, Direction = DirectionParser.Parse(model.Direction) };
                    var robot = new Robot(position);
                    results.Add(nvgService.ExploreTerrain(plateau, robot, CommandParser.Parse(model.Movements)));
                }

                return new JsonResult(
                    results.Select(x => new
                    {
                        res = $"{x.X} {x.Y} {x.Direction} {x.ErrorMessage ?? ""}"
                    }).ToList()
                );
            }
            catch (Exception exp)
            {
                return new JsonResult(HttpStatusCode.InternalServerError, exp.Message);
            }
        }
    }
}
