var Circle = /** @class */ (function () {
    function Circle(r, c) {
        this.radious = 1.0;
        this.radious = r;
        this.color = c;
    }
    Circle.prototype.getRadious = function () {
        return this.radious;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setRadious = function (r) {
        this.radious = r;
    };
    Circle.prototype.setColor = function (c) {
        this.color = c;
    };
    Circle.prototype.getArea = function () {
        return this.radious * this.radious * Math.PI;
    };
    Circle.prototype.toString = function () {
        return "Radious: ".concat(this.radious, "\nArea: ").concat(this.getArea(), "\nColor: ").concat(this.color);
    };
    return Circle;
}());
var c1 = new Circle(1, 'red');
console.log(c1.toString());
