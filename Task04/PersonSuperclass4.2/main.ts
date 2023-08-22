class Person{
    protected name : string;
    protected address: string;

    constructor(n:string, a:string){
        this.name=n;
        this.address=a;
    }

    getName():string{
        return this.name;
    }
    getAddress():string{
        return this.address;
    }
    setAddress(a:string){
        this.address=a;
    }

    toString(){
        return `Name: ${this.name}\nAddress: ${this.address}`;
    }
}

class Student extends Person{
    private program: string;
    private year: number;
    private fee: number;

    constructor(n:string,a:string,p:string,y:number,f:number){
        super(n,a);
        this.program=p;
        this.year=y;
        this.fee=f;
    }

    getProgram():string{
        return this.program;
    }
    getYear():number{
        return this.year;
    }
    getFee():number{
        return this.fee;
    }
    setProgram(p:string){
        this.program=p;
    }
    setYear(y:number){
        this.year=y;
    }
    setFee(f:number){
        this.fee=f;
    }

    toString() {
        return `${super.toString()}\nProgram: ${this.program}\nYear: ${this.year}\nFee: ${this.fee}`;
    }   
}

class Staff extends Person{
    private school: string;
    private pay :number;

    constructor(n:string,a:string,s:string,p:number){
        super(n,a);
        this.school=s;
        this.pay=p;
    }

    getSchool():string{
        return this.school;
    }
    getPay():number{
        return this.pay;
    }
    setSchool(s:string){
        this.school=s;
    }
    setPay(p:number){
        this.pay=p;
    }

    toString():string{
        return`${super.toString()}\nSchool: ${this.school}\nPay: ${this.pay}`;
    }   
}

const p1 =new Person('Khadeja','Mansoura');
console.log(p1.toString());

const stu1=new Student('Khadeja','Mansoura','SWE',3,12000);
console.log(stu1.toString());

const sta1 =new Staff('Khadeja','Mansoura','collage',5000);
console.log(sta1.toString());
