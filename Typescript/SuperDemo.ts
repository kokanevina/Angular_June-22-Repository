class NeoEmployee{
    empId:number;   // public
    protected empName:string;
    empSalary:number;

    constructor(){
        console.log("In superclass constructor");  
        this.empId=0;
        this.empName="ZZZ";
        this.empSalary=10000;   
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
    constructor(){
        console.log("In subclass constructor");      
        super();    // constructor chaining, call goes to superclass def constructor
        this.specialization="YYY";
        this.teachingExp=1;
     
    }

    getTrainerDetails():string{
        return "Subject Specialization:"+this.specialization+" Teaching Experience:"+this.teachingExp;
    }
    getName(){
       return this.empName;   // protected property
    }
} // end of class

class FrontEndTrainer extends NeoTrainer{
     //own properties
    
}


class NeoDeveloper extends NeoEmployee{
    // own properties
}


let trainer1=new NeoTrainer();
console.log(trainer1.getEmpDetails());
console.log(trainer1.getTrainerDetails());
trainer1.empId=567;
trainer1.empSalary=56789;
trainer1.specialization="Front End Technologies";
trainer1.teachingExp=10
trainer1.name="Prasad";
console.log(trainer1.getEmpDetails());
console.log(trainer1.getTrainerDetails());



/* when u subclass object superclass object gets automatically created
super class constructor (def constr), then subclass def constructor 
*/
/* when u create own constructor in subclass then super call must be there*/