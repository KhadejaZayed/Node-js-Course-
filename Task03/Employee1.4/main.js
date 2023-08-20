var Employee = /** @class */ (function () {
    function Employee(id, firstName, lastName, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    Employee.prototype.getId = function () {
        return this.id;
    };
    Employee.prototype.getFirstName = function () {
        return this.firstName;
    };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    Employee.prototype.getName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Employee.prototype.getAnnualSalary = function () {
        return this.salary * 12;
    };
    Employee.prototype.raiseSalary = function (percent) {
        this.salary += this.salary * percent;
        return this.salary;
    };
    Employee.prototype.toString = function () {
        return "id: ".concat(this.id, "\nname: ").concat(this.firstName, " ").concat(this.lastName, "\nsalary: ").concat(this.salary);
    };
    return Employee;
}());
var emp1 = new Employee(1, "Khadeja", "Zayed", 10000);
emp1.raiseSalary(.4);
console.log(emp1.toString());
