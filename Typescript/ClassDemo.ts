// class name: 1st letter capital
//method name , variable name : camel case
class NeoEmployee{
    empId:number;   // public
    empName:string;
    empSalary:number;
    married:boolean;
    getEmpDetails():string{
        return "id:"+this.empId+" name:"+this.empName+" salary:"+this.empSalary+" married?"+this.married;
    }
} // end of class
let employee1:NeoEmployee;  // custom data type
employee1=new NeoEmployee();  // call implicitly goes to default constructor
let details=employee1.getEmpDetails();
console.log(details);  // undefined
employee1.empId=567;  employee1.empName="Poonam";
employee1.empSalary=78000; employee1.married=false;
 details=employee1.getEmpDetails();
console.log(details); 
let employee2=new NeoEmployee();
employee2.empName="Karuna"; employee2.empId=555;
employee2.empSalary=90000; employee2.married=true;
details=employee2.getEmpDetails();
console.log(details); 
employee2.empSalary=55000;
console.log(employee1.getEmpDetails());

//Q. how we can change salary of employee2. 
//after changing salary does it affect salary of employee1?