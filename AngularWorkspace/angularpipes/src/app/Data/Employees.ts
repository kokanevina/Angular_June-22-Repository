
export class Employee{
    id:number;
    name:string;
    basicSalary:number;
    joinDate:Date;
    constructor(id:number,name:string,basicSalary:number, joinDate:Date){
        this.id=id;
        this.basicSalary=basicSalary;
        this.joinDate=joinDate;
        this.name=name;
    }
}

