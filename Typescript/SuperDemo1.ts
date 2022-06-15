class NeoEmployee{
    empId:number;   // public
    protected empName:string;
    empSalary:number;
    deparmentName:string;
    constructor(empId:number,empName:string,empSalary:number){
        console.log("In superclass p-constructor"); 
        this.empId=empId;
        this.empName=empName;
        this.empSalary=empSalary;
        this.deparmentName="LD" ;
    }
    getEmpDetails():string{
        return "id:"+this.empId+" name:"+this.empName+" salary:"+this.empSalary;
    }
     get name(){
        return this.empName;
     }
     set name(empName:string){
        this.empName=empName;
     }
} // end of class
class NeoTrainer extends NeoEmployee{
    specialization:string;
    teachingExp:number;
    deparmentName:string
    constructor(empId:number,empName:string,empSalary:number,specialization:string,teachingExp:number){
        console.log("In subclass p constructor");      
        super(empId,empName,empSalary);    // 1st use of super keyword
        this.specialization=specialization;
        this.teachingExp=teachingExp;  
        this.deparmentName='Python';  // trainer is giving training to Python department     
    }
    getTrainerDetails():string{
        return "Subject Specialization:"+this.specialization+" Teaching Experience:"+this.teachingExp;
    }
    test():void{
        console.log("Trainer variable:"+this.deparmentName);
        console.log("Employee variable"+super.deparmentName);   // typescript gives undefined value
        //as typescript allows to put unique variable names in inherited classes     
    }
} // end of class
let trainer1=new NeoTrainer(123,"Hari",78000,'Front End',7);
console.log(trainer1.getEmpDetails());
console.log(trainer1.getTrainerDetails());
console.log("Trainer variable:"+trainer1.deparmentName);
trainer1.test();
let trainer2=new NeoTrainer(423,"HariPrasad",78000,'Back End',10);
console.log(trainer1.getEmpDetails());
console.log(trainer1.getTrainerDetails());
console.log("Trainer variable:"+trainer1.deparmentName);
trainer2.test();
/* when u subclass object superclass object gets automatically created
super class constructor (def constr), then subclass def constructor 
*/
/* when u create own constructor in subclass then super call must be there*/