var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * this.radius * Math.PI;
    };
    Circle.prototype.toString = function () {
        return "Radius: ".concat(this.radius, "\nArea: ").concat(this.getArea(), "\nPerimeter: ").concat(this.getPerimeter());
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    Rectangle.prototype.getArea = function () {
        return this.length * this.width;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.length + this.width);
    };
    Rectangle.prototype.toString = function () {
        return "Length: ".concat(this.length, "\nWidth: ").concat(this.width, "\nArea: ").concat(this.getArea(), "\nPerimeter: ").concat(this.getPerimeter());
    };
    return Rectangle;
}());
var c1 = new Circle(3);
console.log(c1.toString());
var r1 = new Rectangle(5, 10);
console.log(r1.toString());
