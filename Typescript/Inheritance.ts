class NeoEmployee{
    empId:number;   // public
    protected empName:string;
    empSalary:number;
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
    getTrainerDetails():string{
        return "Subject Specialization:"+this.specialization+" Teaching Experience:"+this.teachingExp;
    }
    getName(){
       return this.empName;   // protected property
    }
} // end of class
let trainer1=new NeoTrainer();
trainer1.empId=567;
trainer1.empSalary=56789;
trainer1.specialization="Front End Technologies";
trainer1.teachingExp=10
trainer1.name="Prasad";
console.log(trainer1.getEmpDetails());
console.log(trainer1.getTrainerDetails());
class FrontEndTrainer extends NeoTrainer{
    //own properties
   
}


class NeoDeveloper extends NeoEmployee{
   // own properties
}
