/// <summary>
/// Stores the surface of the plateau.
/// </summary>

namespace BusinessLayer.Domain
{
    public class Plateau
    {
        public Plateau()
        {

        }
        public Plateau(int x, int y)
        {
            /* The parameters are the upper most right hand corner of the plateau */
            Height = y;
            Length = x;
        }

        public int Height;
        public int Length;
    }
}
