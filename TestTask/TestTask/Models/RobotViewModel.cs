using BusinessLayer.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestTask.Models
{
    public class RobotViewModel
    {
        public List<PositionViewModel> PositionViewModels { get; set; }
        public int Height { get; set; }
        public int Length { get; set; }
    }

    public class PositionViewModel
    {
        public int X { get; set; }
        public int Y { get; set; }
        public string Direction { get; set; }
        public string Movements { get; set; }
        public string ErrorMessage { get; set; }
    }
}
