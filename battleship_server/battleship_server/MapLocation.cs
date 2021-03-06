﻿using System;
namespace FirstCSharpProgram
{
    class MapLocation : Point
    {
        public MapLocation(int x, int y, Map map) : base(x, y)
        {
            if (!map.OnMap(this))
            {
                throw new System.Exception(x + ", " + y + " is outside the boundaries of the map!");
            }
        }
    }
}
