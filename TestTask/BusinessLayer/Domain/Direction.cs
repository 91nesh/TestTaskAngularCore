using System.ComponentModel;
/// <summary>
/// Enumerator to specify directions where the root has to move.
/// </summary>
namespace BusinessLayer.Domain
{
    public enum Direction
    {
        [Description("North")]
        North,
        [Description("East")]
        East,
        [Description("South")]
        South,
        [Description("West")]
        West
    }
}
