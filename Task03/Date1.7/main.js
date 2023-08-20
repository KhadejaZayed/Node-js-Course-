var Date = /** @class */ (function () {
    function Date(d, m, y) {
        this.day = d;
        this.month = m;
        this.year = y;
    }
    Date.prototype.getDay = function () {
        return this.day;
    };
    Date.prototype.getMonth = function () {
        return this.month;
    };
    Date.prototype.getYear = function () {
        return this.year;
    };
    Date.prototype.setDay = function (d) {
        this.day = d;
    };
    Date.prototype.setMonth = function (m) {
        this.month = m;
    };
    Date.prototype.setYear = function (y) {
        this.year = y;
    };
    Date.prototype.setDate = function (d, m, y) {
        this.day = d;
        this.month = m;
        this.year = y;
    };
    Date.prototype.toString = function () {
        var dayCheck = true;
        var monthCheck = true;
        var yearCheck1 = true;
        var yearCheck2 = true;
        var yearCheck3 = true;
        if (this.year < 1000) {
            yearCheck1 = false;
            if (this.year < 100) {
                yearCheck2 = false;
                if (this.year < 10) {
                    yearCheck3 = false;
                }
            }
        }
        if (this.month < 10) {
            monthCheck = false;
        }
        if (this.day < 10) {
            dayCheck = false;
        }
        if (dayCheck && monthCheck) {
            if (yearCheck1) {
                return "".concat(this.day, "/").concat(this.month, "/").concat(this.year);
            }
            else if (yearCheck2) {
                return "".concat(this.day, "/").concat(this.month, "/0").concat(this.year);
            }
            else if (yearCheck3) {
                return "".concat(this.day, "/").concat(this.month, "/00").concat(this.year);
            }
            else {
                return "".concat(this.day, "/").concat(this.month, "/000").concat(this.year);
            }
        }
        else if (dayCheck) {
            if (yearCheck1) {
                return "".concat(this.day, "/0").concat(this.month, "/").concat(this.year);
            }
            else if (yearCheck2) {
                return "".concat(this.day, "/0").concat(this.month, "/0").concat(this.year);
            }
            else if (yearCheck3) {
                return "".concat(this.day, "/0").concat(this.month, "/00").concat(this.year);
            }
            else {
                return "".concat(this.day, "/0").concat(this.month, "/000").concat(this.year);
            }
        }
        else if (monthCheck) {
            if (yearCheck1) {
                return "0".concat(this.day, "/").concat(this.month, "/").concat(this.year);
            }
            else if (yearCheck2) {
                return "0".concat(this.day, "/").concat(this.month, "/0").concat(this.year);
            }
            else if (yearCheck3) {
                return "0".concat(this.day, "/").concat(this.month, "/00").concat(this.year);
            }
            else {
                return "0".concat(this.day, "/").concat(this.month, "/000").concat(this.year);
            }
        }
        else if (yearCheck1) {
            return "0".concat(this.day, "/0").concat(this.month, "/").concat(this.year);
        }
        else if (yearCheck2) {
            return "0".concat(this.day, "/0").concat(this.month, "/0").concat(this.year);
        }
        else if (yearCheck3) {
            return "0".concat(this.day, "/0").concat(this.month, "/00").concat(this.year);
        }
        else {
            return "0".concat(this.day, "/0").concat(this.month, "/000").concat(this.year);
        }
    };
    return Date;
}());
var d1 = new Date(5, 1, 1900);
console.log(d1.toString());
