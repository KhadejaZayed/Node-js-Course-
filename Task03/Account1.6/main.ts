class Account{
    private id: string;
    private name: string;
    private balance: number;

    constructor(id:string,name:string,bal:number){
        this.id=id;
        this.name=name;
        this.balance=bal;
    }

    getId() :string{
        return this.id;
    }

    getName() :string{
        return this.name;
    }

    getBalance() :number{
        return this.balance;
    }

    credit(amount:number): number{
        return this.balance += amount;
    }

    debit(amount: number) :number{
        if(amount<= this.balance){
            this.balance -=amount;
        }else{
            console.log('Amount exceeded balance');    
        }
        return this.balance;
    }

    transferTo(another:Account,amount:number):number{
        if(amount<=this.balance){
            another.credit(amount);
            this.balance -=amount;
        }else{
            console.log('Amount exceeded balance');
        }
        return this.balance;
    }

    toString() : string{
        return `Id: ${this.id}\nName: ${this.name}\nBalance: ${this.balance}`;
    }
}

const acc1 =new Account("A101", "Tan Ah Teck", 100);
const acc2 =new Account("A102", "Kumar", 200);

acc1.credit(100);
acc1.debit(50);
console.log(acc1.toString());

acc1.debit(500);

acc1.transferTo(acc2, 100);
console.log(acc1.toString());
console.log(acc2.toString());