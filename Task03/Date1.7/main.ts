class Date{
    private day: number;
    private month: number;
    private year: number;

    constructor(d:number,m:number,y:number){
        this.day=d;
        this.month=m;
        this.year=y;
    }

    getDay():number{
        return this.day;
    }
    getMonth():number{
        return this.month;
    }
    getYear():number{
        return this.year;
    }

    setDay(d:number){
        this.day=d;
    }
    setMonth(m:number){
        this.month=m;
    }
    setYear(y:number){
        this.year=y;
    }

    setDate(d:number,m:number,y:number){
        this.day=d;
        this.month=m;
        this.year=y;
    }

    toString():string{
        let dayCheck :Boolean=true;
        let monthCheck :Boolean=true;
        let yearCheck1 :Boolean =true;
        let yearCheck2 :Boolean =true;
        let yearCheck3 :Boolean =true;
        
        if(this.year<1000){
            yearCheck1 =false;
            if(this.year<100){
                yearCheck2=false;
                if(this.year<10){
                    yearCheck3=false;
                }
            }
        }

        if(this.month<10){
            monthCheck=false;
            
        }

        if(this.day<10){
            dayCheck=false;
        }

        if(dayCheck &&monthCheck){
            if(yearCheck1){
                return`${this.day}/${this.month}/${this.year}`;
            }else if(yearCheck2){
                return `${this.day}/${this.month}/0${this.year}`;
            }else if(yearCheck3){
                return `${this.day}/${this.month}/00${this.year}`;
            }else{
                return `${this.day}/${this.month}/000${this.year}`;
            }
        }else if(dayCheck){
            if(yearCheck1){
                return`${this.day}/0${this.month}/${this.year}`;
            }else if(yearCheck2){
                return `${this.day}/0${this.month}/0${this.year}`;
            }else if(yearCheck3){
                return `${this.day}/0${this.month}/00${this.year}`;
            }else{
                return `${this.day}/0${this.month}/000${this.year}`;
            }
        }else if(monthCheck){
            if(yearCheck1){
                return`0${this.day}/${this.month}/${this.year}`;
            }else if(yearCheck2){
                return `0${this.day}/${this.month}/0${this.year}`;
            }else if(yearCheck3){
                return `0${this.day}/${this.month}/00${this.year}`;
            }else{
                return `0${this.day}/${this.month}/000${this.year}`;
            }
        }else if(yearCheck1){
            return`0${this.day}/0${this.month}/${this.year}`;
        }else if(yearCheck2){
            return `0${this.day}/0${this.month}/0${this.year}`;
        }else if(yearCheck3){
            return `0${this.day}/0${this.month}/00${this.year}`;
        }else{
            return `0${this.day}/0${this.month}/000${this.year}`;
        }
    }
}

const d1= new Date(5,1,1900);
console.log(d1.toString());
