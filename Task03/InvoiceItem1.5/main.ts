class InvoiceItem{
    private id: string;
    private description: string;
    private quantitiy: number;
    private unitPrice: number;

    constructor(id:string, desc:string, qua:number, uni: number){
        this.id=id;
        this.description=desc;
        this.quantitiy=qua;
        this.unitPrice=uni;
    }

    getId():string{
        return this.id;
    }

    getDescription() :string{
        return this.description;
    }

    getQuantity() : number{
        return this.quantitiy;
    }

    getUnitPrice() : number{
        return this.unitPrice;
    }

    setQuantity(qua:number){
        this.quantitiy=qua;
    }

    setUnitPrice(uni:number){
        this.unitPrice=uni;
    }

    getTotal(): number{
        return this.unitPrice *this.quantitiy;
    }

    toString() :string{
        return `Id: ${this.id}\nDescription: ${this.description}\nQuantity: ${this.quantitiy}\nUnit Price: ${this.unitPrice}\nTotal: ${this.getTotal()}`;
    }

}

const inv1= new InvoiceItem('A101','Pen Red',888,.08);
console.log(inv1.toString());