var NeoEmployee = /** @class */ (function () {
    function NeoEmployee(eid, ename, esalary) {
        this.eid = eid;
        this.ename = ename;
        this.esalary = esalary;
        NeoEmployee.count++;
    }
    NeoEmployee.prototype.getDetails = function () {
        return "Id: ".concat(this.eid, " Name: ").concat(this.ename, " Salary: ").concat(this.esalary, " Count: ").concat(NeoEmployee.count);
    };
    NeoEmployee.getCount = function () {
        return NeoEmployee.count;
    };
    NeoEmployee.assignCompanyName = function (cname) {
        NeoEmployee.companyName = cname;
    };
    NeoEmployee.showId = function (emp) {
        console.log(emp.eid);
    };
    NeoEmployee.count = 0;
    return NeoEmployee;
}()); //
NeoEmployee.companyName = "Neosoft";
console.log(NeoEmployee.getCount());
var employee1 = new NeoEmployee(123, 'hari', 80000);
console.log(employee1.getDetails());
var employee2 = new NeoEmployee(124, 'hari', 10000);
var employee3 = new NeoEmployee(125, 'hari', 10000);
console.log(employee3.getDetails());
console.log(NeoEmployee.getCount());
console.log(NeoEmployee.companyName);
NeoEmployee.assignCompanyName("Neosofter");
console.log(NeoEmployee.companyName);
NeoEmployee.showId(employee2);
/* non static method can access static variables?
static method can access non static members?*/ 
