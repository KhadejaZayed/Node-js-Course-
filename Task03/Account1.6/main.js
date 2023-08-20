var Account = /** @class */ (function () {
    function Account(id, name, bal) {
        this.id = id;
        this.name = name;
        this.balance = bal;
    }
    Account.prototype.getId = function () {
        return this.id;
    };
    Account.prototype.getName = function () {
        return this.name;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.credit = function (amount) {
        return this.balance += amount;
    };
    Account.prototype.debit = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log('Amount exceeded balance');
        }
        return this.balance;
    };
    Account.prototype.transferTo = function (another, amount) {
        if (amount <= this.balance) {
            another.credit(amount);
            this.balance -= amount;
        }
        else {
            console.log('Amount exceeded balance');
        }
        return this.balance;
    };
    Account.prototype.toString = function () {
        return "Id: ".concat(this.id, "\nName: ").concat(this.name, "\nBalance: ").concat(this.balance);
    };
    return Account;
}());
var acc1 = new Account("A101", "Tan Ah Teck", 100);
var acc2 = new Account("A102", "Kumar", 200);
acc1.credit(100);
acc1.debit(50);
console.log(acc1.toString());
acc1.debit(500);
acc1.transferTo(acc2, 100);
console.log(acc1.toString());
console.log(acc2.toString());
