abstract class Shape{
    protected color : string;
    protected filled: boolean;

    constructor(c:string,f:boolean){
        this.color=c;
        this.filled=f;
    }

    getColor():string{
        return this.color;
    }
    isFilled():boolean{
        return this.filled;
    }
    setColor(c:string){
        this.color=c;
    }
    setFilled(f:boolean){
        this.filled=f;
    }

    abstract getArea():number;
    abstract getPerimeter():number;

    toString():string{
        return `color: ${this.color}\nFilled: ${this.filled}`;
    }
}

class Circle extends Shape{
    private radius:number;

    constructor(r:number,c:string,f:boolean){
        super(c,f);
        this.radius=r;
    }

    getRadius():number{
        return this.radius;
    }
    setRadius(r:number){
        this.radius=r;
    }
    
    getArea():number{
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter():number{
        return 2 * Math.PI * this.radius;
    }

    toString() {
        return `Radius: ${this.radius}\n${super.toString()}`;
    }   
}

class Rectangle extends Shape{
    protected width: number;
    protected length: number;

    constructor(w:number,l:number,c:string,f:boolean){
        super(c,f);
        this.width=w;
        this.length=l;
    }

    getWidth():number{
        return this.width;
    }
    getLength():number{
        return this.length;
    }
    setWidth(w:number){
        this.width=w;
    }
    setLength(l:number){
        this.length=l;
    }

    getArea():number{
        return this.length*this.width;
    }
    getPerimeter():number{
        return 2 *(this.length+this.width);
    }

    toString():string{
        return`${super.toString()}\nWidth: ${this.width}\nLength: ${this.length}`;
    }   
}

class Square extends Rectangle{
    private side:number;

    constructor(s:number,w:number,l:number,c:string,f:boolean){
        super(w,l,c,f);
        this.side=s;
        this.width=s;
        this.length=s;
    }

    getSide():number{
        return this.side;
    }
    setSide(s:number){
        this.side=s;
    }

    setWidth(s:number){
        this.width=s;
    }
    setLength(s:number){
        this.length=s;
    }
}

const c1 =new Circle(2,'red',true);
console.log(c1.toString());

const r1=new Rectangle(50,20,'blue',false);
console.log(r1.toString());

const s1 =new Square(30,0,0,'purple',true);
console.log(s1.toString());
