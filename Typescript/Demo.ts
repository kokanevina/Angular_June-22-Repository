

//variable declaration

let companyName:string;
companyName="Neosoft";
//companyName=678;
//companyName=false;
console.log(companyName);
//document.write(companyName); // browser // web page

let empSalary:number;

let empId:number | string;
empId=123
empId='e123';

let city;       //any
city='mumbai'; 
// lenght of city variable
// charAt(0) : string API
// no intelligence given by editor to any type variable
/*soln : 1. apply to type to a variable, 2. type assertion  */
let l=(<string>city).length
console.log(l);
city=5678;
let ex=(<number>city).toExponential();
console.log(ex);

let area:any;

let branch='Rabale';  //string


