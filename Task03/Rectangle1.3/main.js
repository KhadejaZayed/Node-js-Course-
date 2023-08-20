var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    Object.defineProperty(Rectangle.prototype, "Length", {
        get: function () {
            return this.length;
        },
        set: function (length) {
            this.length = length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "Width", {
        get: function () {
            return this.width;
        },
        set: function (width) {
            this.width = width;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.getArea = function () {
        return this.length * this.width;
    };
    Rectangle.prototype.getPerimeter = function () {
        return this.length * this.width;
    };
    Rectangle.prototype.toString = function () {
        return "Rectangle Length is ".concat(this.length, " \nRectangle Width is ").concat(this.width);
    };
    return Rectangle;
}());
var r1 = new Rectangle(10, 20);
console.log(r1.toString());
