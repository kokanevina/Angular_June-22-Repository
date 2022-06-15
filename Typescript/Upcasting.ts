class NeoEmployee{
    empId:number;   // public
    empName:string;
    empSalary:number;  // consider this as basic salary
    hra:number;
    constructor(empId:number,empName:string,empSalary:number){
        console.log("In superclass p-constructor"); 
        this.empId=empId;
        this.empName=empName;
        this.empSalary=empSalary;
    }
    getDetails():string{
        return "id:"+this.empId+" name:"+this.empName+" salary:"+this.empSalary;
    }
     getGrossSalary(){
        console.log("Employee Method");
        this.hra=0.1*this.empSalary;
        return this.empSalary+this.hra;
     }

} // end of class
class NeoTrainer extends NeoEmployee{
    specialization:string;
    teachingExp:number;  
    tra:number;  // imagine training allowance 20% of basic salary
    constructor(empId:number,empName:string,empSalary:number,specialization:string,teachingExp:number){
        console.log("In subclass p constructor");      
        super(empId,empName,empSalary);    // 1st use of super keyword
        this.specialization=specialization;
        this.teachingExp=teachingExp;       
    }
    getDetails():string{
        let details=super.getDetails();
        return details+" Subject Specialization:"+this.specialization+" Teaching Experience:"+this.teachingExp;
    }
   getGrossSalary(){
        console.log("Trainer Method");
        this.hra=0.1*this.empSalary;
        this.tra=0.2*this.empSalary;
        return this.empSalary+this.hra+this.tra;
    } 

    demo(){

    }

} // end of class

let employee=new NeoEmployee(333,'Pooja',45000);
console.log(employee.getDetails());

console.log("Common Employee Gross:"+employee.getGrossSalary()); // super class method
let trainer1=new NeoTrainer(123,"Hari",45000,'Front End',7);
console.log(trainer1.getDetails());
console.log("Trainer-1 Gross:"+trainer1.getGrossSalary()); // sub class method (function overrding)

let trainer2=new NeoTrainer(423,"HariPrasad",50000,'Back End',10);
console.log(trainer2.getDetails());
console.log("Trainer-2 Gross:"+trainer2.getGrossSalary());// sub class method (function overrding)


function getGross(emp:NeoEmployee){
    console.log(typeof emp);
    console.log(emp.getGrossSalary());
    // common and overriding properties are visible
    // unique properties not visible
}

getGross(employee);
getGross(trainer1);  //NeoTrainer

let emp:NeoEmployee;
emp=new NeoTrainer(423,"HariPrasad",50000,'Back End',10);   // upcasting
console.log((<NeoTrainer>emp).specialization);
