"use strict";
exports.__esModule = true;
var MyCollege_1 = require("./MyModule/MyCollege");
var MyCollege_2 = require("./MyModule/MyCollege"); // use this import for default exports
var col = new MyCollege_1.College();
col.collegeCode = "ddfgg";
col.collegeName = "LTEC";
col.collegeCode = "L4556";
console.log(JSON.stringify(col));
console.log(MyCollege_1.universityName);
//uniName="Mumbai Uni"; // value of direct module variables (imported), can not be changed
(0, MyCollege_2["default"])("Pune University");
console.log(MyCollege_1.universityName);
