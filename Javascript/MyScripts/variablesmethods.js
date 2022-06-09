/*dynamically typed language */
var clocation;
clocation='Dadar';
console.log(clocation);
console.log(typeof clocation);
clocation=4567;
console.log(clocation);
console.log(typeof clocation);
clocation=false;
console.log(clocation);
console.log(typeof clocation);
var clocation=5456.89; /*var type variables can be redeclared */
const branch="Rabale";
//branch='Airoli'; /*once initialized constant vairables value cant be changed*/
console.log(branch);
/*statically typed language int a, String b, double c, boolean d*/ 

let company='Neosoft Technology';
//let company='Neosoft';  /* let type variables cant be redeclared*/
company='Squad Infotech';

function addNums(){
    let num1=67; let num2=56;
    let res=num1+num2;
    console.log(res);
    document.write(res);  // web page
}
addNums();
function subNums(no1,no2){
    return (no1-no2);
}
document.write('<br>');
let res=subNums(89,45);
document.write(res);
console.log(res);

function test(){

    for(var i=1;i<=5;i++){
        console.log("Inside loop i="+i);
    }// ended
    console.log("outside loop i="+i);  // functional scope
}
test();
function test2(){

    for(let i=1;i<=5;i++){
        console.log("Inside loop i="+i);
    }// ended block scope
   // console.log("outside loop i="+i);  // block scope
}
test2();

/* annonnymous functions : without any name, ref variable*/
const cubeFun=function(num){
    return num*num*num;
}
document.write('<br>');
document.write(cubeFun(7));
console.log(cubeFun(7));

/* arrow functions : no name, no function keyword, => between () and {} */
const arrowFun1=(num)=>{
    console.log(num*num*num);
}
arrowFun1(8);
/*1. if body contains only single statement then {} are optional
2. if only one argument passed then () are optional */

const arrowFun2= num => console.log(num*num*num);
arrowFun2(9);
/* if body contains single return statement then {} are optional bu return keyword not allowed
function automatically returns the result */
const arrowFun3=  num => num*num*num

let cube=arrowFun3(12);
console.log(cube);


