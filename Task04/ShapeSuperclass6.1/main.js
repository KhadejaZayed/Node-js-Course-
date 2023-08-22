var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(c, f) {
        this.color = c;
        this.filled = f;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.isFilled = function () {
        return this.filled;
    };
    Shape.prototype.setColor = function (c) {
        this.color = c;
    };
    Shape.prototype.setFilled = function (f) {
        this.filled = f;
    };
    Shape.prototype.toString = function () {
        return "color: ".concat(this.color, "\nFilled: ").concat(this.filled);
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(r, c, f) {
        var _this = _super.call(this, c, f) || this;
        _this.radius = r;
        return _this;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (r) {
        this.radius = r;
    };
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    Circle.prototype.toString = function () {
        return "Radius: ".concat(this.radius, "\n").concat(_super.prototype.toString.call(this));
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(w, l, c, f) {
        var _this = _super.call(this, c, f) || this;
        _this.width = w;
        _this.length = l;
        return _this;
    }
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.getLength = function () {
        return this.length;
    };
    Rectangle.prototype.setWidth = function (w) {
        this.width = w;
    };
    Rectangle.prototype.setLength = function (l) {
        this.length = l;
    };
    Rectangle.prototype.getArea = function () {
        return this.length * this.width;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.length + this.width);
    };
    Rectangle.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), "\nWidth: ").concat(this.width, "\nLength: ").concat(this.length);
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(s, w, l, c, f) {
        var _this = _super.call(this, w, l, c, f) || this;
        _this.side = s;
        _this.width = s;
        _this.length = s;
        return _this;
    }
    Square.prototype.getSide = function () {
        return this.side;
    };
    Square.prototype.setSide = function (s) {
        this.side = s;
    };
    Square.prototype.setWidth = function (s) {
        this.width = s;
    };
    Square.prototype.setLength = function (s) {
        this.length = s;
    };
    return Square;
}(Rectangle));
var c1 = new Circle(2, 'red', true);
console.log(c1.toString());
var r1 = new Rectangle(50, 20, 'blue', false);
console.log(r1.toString());
var s1 = new Square(30, 0, 0, 'purple', true);
console.log(s1.toString());
