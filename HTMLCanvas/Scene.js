/**
 * Created by Nomad_Mystic on 1/4/2016.
 */

Scene.prototype.draw = function(context, width, height)
{
    for (var i = 0; i < this.shapes.length; i++) {
        this.shapes[i].draw(context, width, height);
    }
};

Scene.prototype.add = function(shape)
{
    this.shapes.push(shape);
};

function Scene()
{
    this.shapes = [];
}