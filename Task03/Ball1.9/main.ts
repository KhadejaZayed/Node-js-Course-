class Ball{
    private x : number;
    private y : number;
    private radious : number;
    private xDelta : number;
    private yDelta : number;


    constructor(x : number,y : number,r : number,xDe : number,yDe : number){
        this.x=x;
        this.y=y;
        this.radious=r;
        this.xDelta=xDe;
        this.yDelta=yDe;
    }

    getX():number{
        return this.x;
    }
    getY():number{
        return this.y;
    }
    getRadioud():number{
        return this.radious;
    }
    getXDelta():number{
        return this.xDelta;
    }
    getYDelta():number{
        return this.yDelta;
    }

    setX(x:number){
        this.x=x;
    }
    setY(y:number){
        this.y=y;
    }    
    setRadious(r:number){
        this.radious=r;
    }
    setXDelta(xDe:number){
        this.xDelta=xDe;
    }
    setYDelta(yDe:number){
        this.yDelta=yDe;
    }

    move(){
        this.x+=this.xDelta;
        this.y+=this.yDelta;
    }

    reflectHorizontal(){
        this.xDelta= -1*this.xDelta;
    }

    reflectVertical(){
        this.yDelta= -1*this.yDelta;
    }

    toString():string{
        return `Ball: (${this.x},${this.y}) Speed: (${this.xDelta},${this.yDelta})`;
    }
}

const b1=new Ball(100,200,10,40,30);
console.log(b1.toString());
b1.reflectHorizontal();
b1.reflectVertical();
console.log(b1.toString());