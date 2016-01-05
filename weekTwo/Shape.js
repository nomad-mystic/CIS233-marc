/**
 * Created by Nomad_Mystic on 1/4/2016.
 */

// Shape Factory
Shape.create = function(properties)
{
    return new properties.type(properties);
    //switch(properties.type){
    //    case Shape.ShapeType.RECTANGLE:
    //        return new RectangleShape(properties);
    //    case Shape.ShapeType.CIRCLE:
    //        return new CircleShape(properties);
    //    case Shape.ShapeType.TRIANGLE:
    //        return new TriangleShape(properties);
    //}
};

Shape.prototype.scale = function(value, range)
{
    return value * range;
};

Shape.prototype.draw = function(context, width, height)
{
    context.fillStyle = this.properties.color;
    context.strokeStyle = this.properties.outline;
};

function Shape(properties)
{
    this.properties = properties;
}

