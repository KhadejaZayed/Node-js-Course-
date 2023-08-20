class Circle{
    private radious : number;

    constructor(r:number){
        this.radious=r;
    }

    getRadious(): number{
        return this.radious;
    }

    setRadious(r:number){
        this.radious =r;
    }

    getArea():number {
        return this.radious*this.radious * Math.PI;
    }

    getCircumference() : number{
        return 2* Math.PI * this.radious;
    }

    toString():string{
        return `Radious: ${this.radious}\nCircumference: ${this.getCircumference()}\nArea: ${this.getArea()}`
    }
}

const c1= new Circle(1.0);
console.log(c1.toString());
