using BusinessLayer.Domain;
using System;

/// <summary>
/// Parses the direction to program friendly variables.
/// </summary>
namespace BusinessLayer.Parsers
{
    public static class DirectionParser
    {
        public static Direction Parse(string direction)
        {
            switch (direction)
            {
                case "N":
                    return Direction.North;
                case "S":
                    return Direction.South;
                case "W":
                    return Direction.West;
                case "E":
                    return Direction.East;
            }

            throw new InvalidOperationException();
        }

        public static string Parse(Direction direction)
        {
            switch (direction)
            {
                case Direction.North:
                    return "N";
                case Direction.South:
                    return "S";
                case Direction.West:
                    return "W";
                case Direction.East:
                    return "E";
            }

            throw new InvalidOperationException();
        }
    }
}