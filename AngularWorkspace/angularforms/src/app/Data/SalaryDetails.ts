export class SalaryDetails{
    empId:number;
    basicSalary:number;
    HRA:number;
    PF:number;
    grossSalary:number;
    netSalary:number;
    constructor(empId,basicSalary,HRA,PF,grossSalary,netSalary){
        this.empId=empId;
        this.HRA=HRA;
        this.PF=PF;
        this.basicSalary=basicSalary;
        this.grossSalary=grossSalary;
        this.netSalary=netSalary;
    }
}