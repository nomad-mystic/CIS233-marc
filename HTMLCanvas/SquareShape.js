/**
 * Created by Nomad_Mystic on 1/4/2016.
 */


SquareShape.prototype = new RectangleShape({});

function SquareShape(properties)
{
    properties.width = properties.size;
    properties.height = properties.size;
    this.properties = properties;
    //this.super = new RectangleShape(properties);
}
