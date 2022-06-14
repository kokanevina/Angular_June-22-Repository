
class NeoEmployee{
    empId:number;   // public
    empName:string;
    empSalary:number;
    married:boolean;
   constructor(){
        console.log("in default constructor");
        this.empId=0;
        this.empName="AAA";
        this.empSalary=1000;
        this.married=false;   
   }
    getEmpDetails():string{
        return "id:"+this.empId+" name:"+this.empName+" salary:"+this.empSalary+" married?"+this.married;
    }
} // end of class
let employee1:NeoEmployee;  // custom data type
employee1=new NeoEmployee();  // call implicitly goes to default constructor
let details=employee1.getEmpDetails();
console.log(details);  
employee1.empId=567;  employee1.empName="Poonam";
employee1.empSalary=78000; employee1.married=false;
 details=employee1.getEmpDetails();
console.log(details); 
let employee2=new NeoEmployee();
details=employee2.getEmpDetails();
console.log(details); 
employee2.empName="Karuna"; employee2.empId=555;
employee2.empSalary=90000; employee2.married=true;
details=employee2.getEmpDetails();
console.log(details); 


//Q. how we can change salary of employee2. 
//after changing salary does it affect salary of employee1?
class Student{
    private stdId:string;
    private stdPercetange:number;
     // only one constructor allowed in class, typescript doesnot support overloading
     constructor(stdId:string,stdPercentage:number){
            this.stdId=stdId;
            this.stdPercetange=stdPercentage;
     }
     set sid(stdId:string){
        this.stdId=stdId;
     }
     get sid(){
        return this.stdId;
     }
     set sperc (stdPerc : number){
        this.stdPercetange = stdPerc;
    }
    get sperc(){ 
        return this.stdPercetange;
    }
    showDetails():string{
        //return "id:"+this.stdId+"Percentage:"+this.stdPercetange;
        return `Id: ${this.stdId} Percentage: ${this.stdPercetange}`;
    }
} // end of class
let student1=new Student('st123',78); // call will go to parametr constructor
let student2=new Student('st122',86);
let student3=new Student('st124',78);
let student4=new Student('st111',90);
console.log(student1.showDetails());
// display percentage of student3
//console.log(student3.stdPercetange); 
// private properties of a class cant be accessed outside of class directly
//soln: create public environment(get set properties) in class access variables via public env.
// change percentage of student2
//student2.stdPercetange=56;
// display percentage of student3
let p=student3.sperc;
console.log(p);
// change percentage of student2
student2.sperc=67;