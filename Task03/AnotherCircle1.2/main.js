var Circle = /** @class */ (function () {
    function Circle(r) {
        this.radious = r;
    }
    Circle.prototype.getRadious = function () {
        return this.radious;
    };
    Circle.prototype.setRadious = function (r) {
        this.radious = r;
    };
    Circle.prototype.getArea = function () {
        return this.radious * this.radious * Math.PI;
    };
    Circle.prototype.getCircumference = function () {
        return 2 * Math.PI * this.radious;
    };
    Circle.prototype.toString = function () {
        return "Radious: ".concat(this.radious, "\nCircumference: ").concat(this.getCircumference(), "\nArea: ").concat(this.getArea());
    };
    return Circle;
}());
