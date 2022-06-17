import {College,universityName as uniName} from './MyModule/MyCollege';
import setUniv from './MyModule/MyCollege'; // use this import for default exports
import * as dept from './MyModule/MyDeparment';
import deptArea from './MyModule/MyDeparment';
// properties exported default can not be accessed using import *
let col=new College();
col.collegeCode="ddfgg";
col.collegeName="LTEC";
col.collegeCode="L4556";
console.log(JSON.stringify(col));
console.log(uniName);
//uniName="Mumbai Uni"; // value of direct module variables (imported), can not be changed
setUniv("Pune University");
console.log(uniName);
let deparment=new dept.Deparment();
deparment.deptCode="CSE";
deparment.deptBudget=5000000;
let head=new dept.DepartmentHead();
// so on..
console.log(deptArea);
//dept.deptArea="4546";
