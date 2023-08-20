var InvoiceItem = /** @class */ (function () {
    function InvoiceItem(id, desc, qua, uni) {
        this.id = id;
        this.description = desc;
        this.quantitiy = qua;
        this.unitPrice = uni;
    }
    InvoiceItem.prototype.getId = function () {
        return this.id;
    };
    InvoiceItem.prototype.getDescription = function () {
        return this.description;
    };
    InvoiceItem.prototype.getQuantity = function () {
        return this.quantitiy;
    };
    InvoiceItem.prototype.getUnitPrice = function () {
        return this.unitPrice;
    };
    InvoiceItem.prototype.setQuantity = function (qua) {
        this.quantitiy = qua;
    };
    InvoiceItem.prototype.setUnitPrice = function (uni) {
        this.unitPrice = uni;
    };
    InvoiceItem.prototype.getTotal = function () {
        return this.unitPrice * this.quantitiy;
    };
    InvoiceItem.prototype.toString = function () {
        return "Id: ".concat(this.id, "\nDescription: ").concat(this.description, "\nQuantity: ").concat(this.quantitiy, "\nUnit Price: ").concat(this.unitPrice, "\nTotal: ").concat(this.getTotal());
    };
    return InvoiceItem;
}());
var inv1 = new InvoiceItem('A101', 'Pen Red', 888, .08);
console.log(inv1.toString());
