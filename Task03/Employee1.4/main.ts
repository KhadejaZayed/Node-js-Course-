class Employee{
    private id : number;
    private firstName : string;
    private lastName : string;
    private salary : number;

    constructor(id: number, firstName: string, lastName: string, salary : number){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    getId() : number{
        return this.id;
    }
    getFirstName() : string{
        return this.firstName;
    }
    getLastName() : string{
        return this.lastName;
    }
    getName() : string{
        return `${this.firstName} ${this.lastName}`;
    }
    getSalary() : number{
        return this.salary;
    }
    setSalary(salary: number) {
        this.salary =salary;
    }
    getAnnualSalary() : number{
        return this.salary *12;
    }
    raiseSalary(percent :number): number{
        this.salary += this.salary *percent;
        return this.salary;
    }

    toString() : string{
        return `id: ${this.id}\nname: ${this.firstName} ${this.lastName}\nsalary: ${this.salary}`;
    }
}

const emp1= new Employee(1,"Khadeja","Zayed",10000);
emp1.raiseSalary(.4);
console.log(emp1.toString());