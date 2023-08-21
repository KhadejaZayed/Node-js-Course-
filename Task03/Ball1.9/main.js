var Ball = /** @class */ (function () {
    function Ball(x, y, r, xDe, yDe) {
        this.x = x;
        this.y = y;
        this.radious = r;
        this.xDelta = xDe;
        this.yDelta = yDe;
    }
    Ball.prototype.getX = function () {
        return this.x;
    };
    Ball.prototype.getY = function () {
        return this.y;
    };
    Ball.prototype.getRadioud = function () {
        return this.radious;
    };
    Ball.prototype.getXDelta = function () {
        return this.xDelta;
    };
    Ball.prototype.getYDelta = function () {
        return this.yDelta;
    };
    Ball.prototype.setX = function (x) {
        this.x = x;
    };
    Ball.prototype.setY = function (y) {
        this.y = y;
    };
    Ball.prototype.setRadious = function (r) {
        this.radious = r;
    };
    Ball.prototype.setXDelta = function (xDe) {
        this.xDelta = xDe;
    };
    Ball.prototype.setYDelta = function (yDe) {
        this.yDelta = yDe;
    };
    Ball.prototype.move = function () {
        this.x += this.xDelta;
        this.y += this.yDelta;
    };
    Ball.prototype.reflectHorizontal = function () {
        this.xDelta = -1 * this.xDelta;
    };
    Ball.prototype.reflectVertical = function () {
        this.yDelta = -1 * this.yDelta;
    };
    Ball.prototype.toString = function () {
        return "Ball: (".concat(this.x, ",").concat(this.y, ") Speed: (").concat(this.xDelta, ",").concat(this.yDelta, ")");
    };
    return Ball;
}());
var b1 = new Ball(100, 200, 10, 40, 30);
console.log(b1.toString());
b1.reflectHorizontal();
b1.reflectVertical();
console.log(b1.toString());
