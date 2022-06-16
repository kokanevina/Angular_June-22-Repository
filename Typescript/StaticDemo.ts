class NeoEmployee{
    eid:number;
    ename:string;
    esalary:number;
    static companyName:string;
    private static count=0;
    constructor(eid:number,ename:string,esalary:number){
        this.eid=eid;
        this.ename=ename;
        this.esalary=esalary;
        NeoEmployee.count++;
    }
    getDetails(){
        return `Id: ${this.eid} Name: ${this.ename} Salary: ${this.esalary} Count: ${NeoEmployee.count}`
    }
    static getCount(){
        return NeoEmployee.count;
    }
    static assignCompanyName(cname:string){
        NeoEmployee.companyName=cname;
    }
    static showId(emp:NeoEmployee){
        console.log(emp.eid);           
    }
}//
NeoEmployee.companyName="Neosoft";
console.log(NeoEmployee.getCount());
let employee1=new NeoEmployee(123,'hari',80000);
console.log(employee1.getDetails());
let employee2=new NeoEmployee(124,'hari',10000);

let employee3=new NeoEmployee(125,'hari',10000);
console.log(employee3.getDetails());
console.log(NeoEmployee.getCount());
console.log(NeoEmployee.companyName);
NeoEmployee.assignCompanyName("Neosofter");
console.log(NeoEmployee.companyName);
NeoEmployee.showId(employee2);
/* non static method can access static variables? : yess 
static method can access non static members? : via object*/