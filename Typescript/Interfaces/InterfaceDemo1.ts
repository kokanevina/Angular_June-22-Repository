
interface EmployeeIntf{
    id:number;
    name:string;
    department:string
    variablePay?:number;
    getBasicSalary():number;
    getGrossSalary(sal:number):number;
    calculateVariablePay?(exhraHrs:number):void;
}
/* both classes should have variables id, name, department */
class NeoTrainer implements EmployeeIntf{
    id:number;
    name:string;
    department:string;
    techTechnologies:string[]
    variablePay?: number;
    getBasicSalary(): number {
        // implement this method from trainer
    return 0;
    }
    getGrossSalary(sal: number): number {
        // implement this method from trainer
    return 0;
    }
    calculateVariablePay?(exhraHrs : number):void{
        // logic to calculate variable pay
    }

}

class NeoDeveloper implements EmployeeIntf{
    id:number;
    name:string;
    department:string;
    devTechnologies:string[]
    variablePay?: number | undefined;
    getBasicSalary(): number {
        // implement this method from developer
        return 0;
    }
    getGrossSalary(sal: number): number {
        // implement this method from developer
        return 0;
    }
}