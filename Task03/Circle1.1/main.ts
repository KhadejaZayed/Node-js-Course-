class Circle{
    private radious : number = 1.0;
    private color : string;

    constructor(r:number, c :string){
        this.radious =r;
        this.color= c;
    }

    getRadious() : number{
        return this.radious;
    }

    getColor() :string{
        return this.color;
    }
    
    setRadious(r:number){
        this.radious=r;
    }

    setColor(c:string){
        this.color = c;
    }

    getArea() : number{
        return this.radious*this.radious * Math.PI; 
    }

    toString() :string{
        return `Radious: ${this.radious}\nArea: ${this.getArea()}\nColor: ${this.color}`;
    }
}

const c1 = new Circle(1, 'red');
console.log(c1.toString());