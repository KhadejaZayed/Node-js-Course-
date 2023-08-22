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
var Person = /** @class */ (function () {
    function Person(n, a) {
        this.name = n;
        this.address = a;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.setAddress = function (a) {
        this.address = a;
    };
    Person.prototype.toString = function () {
        return "Name: ".concat(this.name, "\nAddress: ").concat(this.address);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(n, a, p, y, f) {
        var _this = _super.call(this, n, a) || this;
        _this.program = p;
        _this.year = y;
        _this.fee = f;
        return _this;
    }
    Student.prototype.getProgram = function () {
        return this.program;
    };
    Student.prototype.getYear = function () {
        return this.year;
    };
    Student.prototype.getFee = function () {
        return this.fee;
    };
    Student.prototype.setProgram = function (p) {
        this.program = p;
    };
    Student.prototype.setYear = function (y) {
        this.year = y;
    };
    Student.prototype.setFee = function (f) {
        this.fee = f;
    };
    Student.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), "\nProgram: ").concat(this.program, "\nYear: ").concat(this.year, "\nFee: ").concat(this.fee);
    };
    return Student;
}(Person));
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(n, a, s, p) {
        var _this = _super.call(this, n, a) || this;
        _this.school = s;
        _this.pay = p;
        return _this;
    }
    Staff.prototype.getSchool = function () {
        return this.school;
    };
    Staff.prototype.getPay = function () {
        return this.pay;
    };
    Staff.prototype.setSchool = function (s) {
        this.school = s;
    };
    Staff.prototype.setPay = function (p) {
        this.pay = p;
    };
    Staff.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), "\nSchool: ").concat(this.school, "\nPay: ").concat(this.pay);
    };
    return Staff;
}(Person));
var p1 = new Person('Khadeja', 'Mansoura');
console.log(p1.toString());
var stu1 = new Student('Khadeja', 'Mansoura', 'SWE', 3, 12000);
console.log(stu1.toString());
var sta1 = new Staff('Khadeja', 'Mansoura', 'collage', 5000);
console.log(sta1.toString());
