var Time = /** @class */ (function () {
    function Time(h, m, s) {
        this.hour = h;
        this.minute = m;
        this.second = s;
    }
    Time.prototype.getHour = function () {
        return this.hour;
    };
    Time.prototype.getMinute = function () {
        return this.minute;
    };
    Time.prototype.getSecond = function () {
        return this.second;
    };
    Time.prototype.setHour = function (h) {
        this.hour = h;
    };
    Time.prototype.setMinute = function (m) {
        this.minute = m;
    };
    Time.prototype.setSecond = function (s) {
        this.second = s;
    };
    Time.prototype.setTime = function (h, m, s) {
        this.hour = h;
        this.minute = m;
        this.second = s;
    };
    Time.prototype.nextSecond = function () {
        if (this.second < 59) {
            this.second += 1;
            return this.toString();
        }
        else {
            this.second = 0;
            if (this.minute < 59) {
                this.minute += 1;
                return this.toString();
            }
            else {
                this.minute = 0;
                if (this.hour < 23) {
                    this.hour += 1;
                    return this.toString();
                }
                else {
                    this.hour = 0;
                    this.minute = 0;
                    this.second = 0;
                    return this.toString();
                }
            }
        }
    };
    Time.prototype.previousSecond = function () {
        if (this.second > 0) {
            this.second -= 1;
            return this.toString();
        }
        else {
            this.second = 59;
            if (this.minute > 0) {
                this.minute -= 1;
                return this.toString();
            }
            else {
                this.minute = 59;
                if (this.hour > 0) {
                    this.hour -= 1;
                    return this.toString();
                }
                else {
                    this.hour = 23;
                    this.minute = 59;
                    this.second = 59;
                    return this.toString();
                }
            }
        }
    };
    Time.prototype.toString = function () {
        var hours = "".concat(this.hour);
        var minutes = "".concat(this.minute);
        var seconds = "".concat(this.second);
        if (this.hour < 10) {
            hours = "0".concat(this.hour);
        }
        if (this.minute < 10) {
            minutes = "0".concat(this.minute);
        }
        if (this.second < 10) {
            seconds = "0".concat(this.second);
        }
        return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
    };
    return Time;
}());
var t1 = new Time(23, 59, 59);
t1.nextSecond();
console.log(t1.nextSecond());
t1.previousSecond();
t1.previousSecond();
console.log(t1.previousSecond());
