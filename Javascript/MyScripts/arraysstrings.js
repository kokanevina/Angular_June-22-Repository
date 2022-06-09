
// arrays are growing arrays
let numArray=[56,34,78,56,89,23,45,132, 243];

console.log(numArray);
console.log(numArray.length);
 numArray.push(34);
console.log(numArray);
console.log(numArray.length);
numArray[2]=100;
console.log(numArray);
console.log(numArray.length);
let nameArray=new Array(5);
console.log(nameArray.length);
console.log(nameArray); 
for(let i=0;i<nameArray.length;i++){
   // nameArray[i]=window.prompt("Enter name");  // alert, confirm
   nameArray[i]='poonam';
}
nameArray.push('vina');
console.log(nameArray.length);
console.log(nameArray);
nameArray.pop();
console.log(nameArray.length);
console.log(nameArray);
//[] / push
// unshift, shift
nameArray.unshift("Madhura");
console.log(nameArray);
nameArray.shift();
console.log(nameArray);

let joined=nameArray.join('-');  /*delimiter */
console.log(joined);
let revArray=numArray.reverse();   // mutable : same array gets changed
console.log(numArray);
console.log(revArray);   // both references are refering to same array
numArray.sort();    // digit comparision. 
//123, 45  1 is compared with 4, 1<4, 123 < 4
console.log(numArray);
numArray.sort((a,b)=>a-b);  //123-45 : +ve if diff is positive then 1st number is greater than 2nd number
console.log(numArray);
nameArray=['hari','amol','Krupa','bal'];
nameArray.sort();
console.log(nameArray);

// forEach : alternate to for loop, find : find the element matching to condition, 
//filter:find the elements matching to condition,
// map : transforms array elements, 
//reduce : reduce to single result 

nameArray.forEach(function(element, index, ref){
    document.write(element+" "+index+" "+ref);
    document.write('<br>');
});
nameArray.forEach(function(element){
    document.write(element);
    document.write('<br>');
});
nameArray.forEach(element=>document.write(element+" "));
// find and filter