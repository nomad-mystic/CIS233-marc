/**
 * Created by Nomad_Mystic on 1/4/2016.
 */

RectangleShape.prototype = new Shape({});
RectangleShape.prototype.draw = function(context, width, height)
{
    Shape.prototype.draw.call(this, context, width, height);

    var x = this.scale(this.properties.x - this.properties.width / 2, width);
    var y = this.scale(this.properties.y - this.properties.height / 2, height);
    var width = this.scale(this.properties.width, width);
    var height = this.scale(this.properties.height, height);

    context.fillRect(x, y, width, height);

    if (this.properties.outline !== undefined) {
        context.strokeRect(x, y, width, height);
    }
}
function RectangleShape(properties) {
    this.properties = properties;
    //this.super = new Shape(properties);
}
