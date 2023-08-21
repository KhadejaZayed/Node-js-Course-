class Time {
    private hour: number;
    private minute: number;
    private second: number;    
    
    constructor(h: number,m: number,s: number){
        this.hour=h;
        this.minute=m;
        this.second=s;
    }

    getHour(): number{
        return this.hour;
    }
    getMinute(): number{
        return this.minute;
    }
    getSecond(): number{
        return this.second;
    }
    setHour(h:number){
        this.hour =h;
    }
    setMinute(m:number){
        this.minute=m;
    }
    setSecond(s:number){
        this.second=s;
    }
    setTime(h: number,m: number,s: number){
        this.hour=h;
        this.minute=m;
        this.second=s;
    }

    nextSecond(){
        if(this.second<59){
            this.second += 1;
            return this.toString();
        }else{
            this.second =0;
            if(this.minute<59){
                this.minute += 1;
                return this.toString();
            }else{
                this.minute =0;
                if(this.hour<23){
                    this.hour += 1;
                    return this.toString();
                }else{
                    this.hour=0;
                    this.minute=0;
                    this.second=0;
                    return this.toString();
                }
            }
        }
    }
    previousSecond(){
        if(this.second>0){
            this.second-=1 ;
            return this.toString();
        }else{
            this.second =59;
            if(this.minute>0){
                this.minute -= 1;
                return this.toString();
            }else{
                this.minute =59;
                if(this.hour>0){
                    this.hour -= 1;
                    return this.toString();
                }else{
                    this.hour=23;
                    this.minute=59;
                    this.second=59;
                    return this.toString();
                }
            }
        }
    }

    toString() :string{
        let hours:String =`${this.hour}`;
        let minutes:String=`${this.minute}`;
        let seconds:String=`${this.second}`;
        if(this.hour<10){
            hours= `0${this.hour}`;
        }
        if(this.minute<10){
            minutes= `0${this.minute}`;
        }
        if(this.second<10){
            seconds= `0${this.second}`;
        }
        return `${hours}:${minutes}:${seconds}`;
        
    }

}
const t1= new Time(23,59,59);
t1.nextSecond();
console.log(t1.nextSecond());
t1.previousSecond();
t1.previousSecond();
console.log(t1.previousSecond());
