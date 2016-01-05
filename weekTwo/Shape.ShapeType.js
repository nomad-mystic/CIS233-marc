/**
 * Created by Nomad_Mystic on 1/4/2016.
 */

Shape.ShapeType = {
    RECTANGLE: RectangleShape,
    CIRCLE: CircleShape,
    TRIANGLE: TriangleShape,
    SQUARE: SquareShape
};

if (Object.freeze !== undefined) {
    Object.freeze(Shape.ShapeType);
}
