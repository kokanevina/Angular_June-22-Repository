
export class College{
    collegeCode:string;
    collegeName:string;
    //constructor
    // get set properties
    // instance method and so on...
}

export let universityName="Shivaji University";

function setUniversity(univ:string){
    universityName=univ;
}

export default setUniversity;

// in one module u may have multiple export statements but only one export default statement
// atleast one property from module can be exported as default
// at the time of import u can use any name to refer a property. {} not used in import

// once we add export keyword in any file, that will bcm a module
// MyCollege.ts  : MyCollege