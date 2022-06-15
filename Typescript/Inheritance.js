class NeoEmployee {
    getEmpDetails() {
        return "id:" + this.empId + " name:" + this.empName + " salary:" + this.empSalary;
    }
    get name() {
        return this.empName;
    }
    set name(empName) {
        this.empName = empName;
    }
} // end of class
class NeoTrainer extends NeoEmployee {
    getTrainerDetails() {
        return "Subject Specialization:" + this.specialization + " Teaching Experience:" + this.teachingExp;
    }
    getName() {
        return this.empName; // protected property
    }
} // end of class
let trainer1 = new NeoTrainer();
trainer1.empId = 567;
trainer1.empSalary = 56789;
trainer1.specialization = "Front End Technologies";
trainer1.teachingExp = 10;
trainer1.name = "Prasad";
console.log(trainer1.getEmpDetails());
console.log(trainer1.getTrainerDetails());
