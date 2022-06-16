interface StudIntf{
    sid:number;
    sName:string;
    percerntage:number;
    grade:string;
}

class Student{
    stdId:number;
    stdName:string;
    percerntage:number;
    grade:string;
    constructor(stud:StudIntf){
        this.stdId=stud.sid;
        this.stdName=stud.sName;
        this.percerntage=stud.percerntage;
        this.grade=stud.grade
    }
}
let stud1:StudIntf={
    'sid':123,
    'sName':'Pooja',
    'percerntage':56,
    'grade':'C'
}
let student1=new Student(stud1);
