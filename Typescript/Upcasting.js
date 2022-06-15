var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NeoEmployee = /** @class */ (function () {
    function NeoEmployee(empId, empName, empSalary) {
        console.log("In superclass p-constructor");
        this.empId = empId;
        this.empName = empName;
        this.empSalary = empSalary;
        this.deparmentName = "LD";
    }
    NeoEmployee.prototype.getDetails = function () {
        return "id:" + this.empId + " name:" + this.empName + " salary:" + this.empSalary;
    };
    NeoEmployee.prototype.getGrossSalary = function () {
        console.log("Employee Method");
        this.hra = 0.1 * this.empSalary;
        return this.empSalary + this.hra;
    };
    return NeoEmployee;
}()); // end of class
var NeoTrainer = /** @class */ (function (_super) {
    __extends(NeoTrainer, _super);
    function NeoTrainer(empId, empName, empSalary, specialization, teachingExp) {
        var _this = this;
        console.log("In subclass p constructor");
        _this = _super.call(this, empId, empName, empSalary) || this; // 1st use of super keyword
        _this.specialization = specialization;
        _this.teachingExp = teachingExp;
        return _this;
    }
    NeoTrainer.prototype.getDetails = function () {
        var details = _super.prototype.getDetails.call(this);
        return details + " Subject Specialization:" + this.specialization + " Teaching Experience:" + this.teachingExp;
    };
    NeoTrainer.prototype.getGrossSalary = function () {
        console.log("Trainer Method");
        this.hra = 0.1 * this.empSalary;
        this.tra = 0.2 * this.empSalary;
        return this.empSalary + this.hra + this.tra;
    };
    return NeoTrainer;
}(NeoEmployee)); // end of class
var employee = new NeoEmployee(333, 'Pooja', 45000);
console.log(employee.getDetails());
console.log("Common Employee Gross:" + employee.getGrossSalary()); // super class method
var trainer1 = new NeoTrainer(123, "Hari", 45000, 'Front End', 7);
console.log(trainer1.getDetails());
console.log("Trainer-1 Gross:" + trainer1.getGrossSalary()); // sub class method (function overrding)
var trainer2 = new NeoTrainer(423, "HariPrasad", 50000, 'Back End', 10);
console.log(trainer2.getDetails());
console.log("Trainer-2 Gross:" + trainer2.getGrossSalary()); // sub class method (function overrding)
function getGross(emp) {
    console.log(typeof emp);
    console.log(emp.getGrossSalary());
}
getGross(employee);
getGross(trainer1); //NeoTrainer
