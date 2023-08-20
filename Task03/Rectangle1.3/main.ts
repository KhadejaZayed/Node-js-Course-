
class Rectangle {
    private length : number;
    private width : number;

    constructor(length:number, width:number){
        this.length= length;
        this.width= width;
    }

    set Length(length:number){
        this.length = length;
    }

    get Length() :number{
        return this.length;
    } 
    
    set Width(width:number) {
        this.width = width;
    }
    
    get Width() :number{
        return this.width;
    }

    getArea(): number{
        return this.length * this.width;
    }

    getPerimeter(): number{
        return this.length * this.width;
    }

    toString() : String{
        return `Rectangle Length is ${this.length} \nRectangle Width is ${this.width}`
    }
}

const r1 = new Rectangle(10,20); 
console.log(r1.toString());
