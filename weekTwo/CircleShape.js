/**
 * Created by Nomad_Mystic on 1/4/2016.
 */
if (CanvasRenderingContext2D !== undefined) {
    CanvasRenderingContext2D.prototype.ellipse = function (cx, cy, rx, ry, rotation, start, end, anticlockwise) {
        var cos = Math.cos(rotation),
            sin = Math.sin(rotation);
        this.transform(cos * rx, sin * rx, -sin * ry, cos * ry, cx, cy);
        this.arc(0, 0, 1, start, end, anticlockwise);
        this.transform(
            cos / rx, -sin / ry,
            sin / rx, cos / ry,
            -(cos * cx + sin * cy) / rx, (sin * cx - cos * cy) / ry);
    }
}

CircleShape.prototype = new Shape({});
CircleShape.prototype.draw = function(context, width, height)
{
    Shape.prototype.draw.call(this, context, width, height);

    var x = this.scale(this.properties.x, width);
    var y = this.scale(this.properties.y, height);
    var xr = this.scale(this.properties.radius, width);
    var yr = this.scale(this.properties.radius, height);

    context.beginPath();
    context.ellipse(x, y, xr, yr, 0, 0, 2 * Math.PI, false);
    context.closePath();
    context.fill();

    if (this.properties.outline !== undefined) {
        context.stroke();
    }
};

function CircleShape(properties)
{
    this.properties = properties;
}