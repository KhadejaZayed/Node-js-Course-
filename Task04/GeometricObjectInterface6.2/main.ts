interface GeometricObject{
    getArea() :number;
    getPerimeter():number;
}

class Circle implements GeometricObject{
    private radius:number;

    constructor(radius:number){
        this.radius=radius;
    }

    getArea():number{
        return Math.PI* this.radius *this.radius;
    }

    getPerimeter(): number{
        return 2*this.radius * Math.PI;
    }

    toString():string{
        return `Radius: ${this.radius}\nArea: ${this.getArea()}\nPerimeter: ${this.getPerimeter()}`;
    }
}

class Rectangle implements GeometricObject{
    private length:number;
    private width:number;

    constructor(length:number,width:number){
        this.length=length;
        this.width=width;
    }

    getArea():number{
        return this.length*this.width;
    }

    getPerimeter(): number{
        return 2*(this.length+ this.width);
    }

    toString():string{
        return `Length: ${this.length}\nWidth: ${this.width}\nArea: ${this.getArea()}\nPerimeter: ${this.getPerimeter()}`;
    }
}

const c1= new Circle(3);
console.log(c1.toString());
const r1= new Rectangle(5,10);
console.log(r1.toString());