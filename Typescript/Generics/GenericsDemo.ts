

// Typesafety 

//Array : collection of strings only
/*1. Common algorith can be written
[all strings ]  : push, pop, shift, unshift,
[all numbers ] : push, pop, shift, unshift*/

//Array, Set, Map
// Array: duplicates allowed, single value collection
//Set : duplicates not allowed, single value collection
// Map: key,value pair collection, duplicate key not allowed


let array1=new Array<string>();
array1.push("Hari");
array1.push("Poonam");
array1.push("Krupa");
array1.push("aa","aaa","bbbb");
array1.pop();
//array1.push(new String('Soham'));
//array1.push(4567);
let array2=new Array<String>();
array2.push(new String('Komal'));
array2.push("Ram");
//array2.push(3445);

let array4=new Array<number>();
array4.push(66778);
array4.push(666778);
array4.push(6778);
array4.push(61778);
array4.push(64778);
array4.push(12,12,1344);

array4.pop();

let array3=new Array();
array3.push('Ram');
array3.push(34565);
array3.push(true);
array3.push('RamSeeta');
array3.push(34565);
array3.push(true);

let map=new Map<number,number>();
map.set(123,899000);
map.set(123,889000);
map.set(123,879000);
map.set(123,869000);
map.set(123,859000);
map.set(456,859000);
console.log(map);
