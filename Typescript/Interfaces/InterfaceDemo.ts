interface StudIntf{
    sid:number;
    sName:string;
    percerntage:number;
    grade?:string;
}
class Student{
    stdId:number;
    stdName:string;
    percerntage:number;
    grade:string | undefined;
    constructor(stud:StudIntf){
        this.stdId=stud.sid;
        this.stdName=stud.sName;
        this.percerntage=stud.percerntage;
        this.grade=stud.grade
    }
}
let stud1:StudIntf={
    'sid':123,
    'percerntage':56,
    'grade':'C',
    'sName':'kumar'
}
let student1=new Student(stud1);

let stud2:StudIntf={
    'sid':143,
    'percerntage':86,
    'sName':'hari'
}
let student2=new Student(stud2);

