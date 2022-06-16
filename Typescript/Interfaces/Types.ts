interface A{
    test();
    a:number;
}
interface B{
    demo();
    b:string
}

class C implements A, B{
    a: number;
    b: string;
    test() {
        throw new Error("Method not implemented.");
    }
    demo() {
        throw new Error("Method not implemented.");
    }

}


class D{
  // variable, methods implementn
}
class E extends D{

}

interface FatherIntf{
    goal();
    dream();
}
interface MotherIntf{
    habbits();
    dream();
}

interface ChildIntf extends MotherIntf,FatherIntf{ 
    achieve();
    mesage:string;
}
class Child implements FatherIntf,MotherIntf{
    goal() {
        
    }
    dream() {
        return "Professional Singer";
    }
    habbits() {
        throw new Error("Method not implemented.");
    }
  

}
class Daugther implements ChildIntf{
    habbits() {
      
    }
    dream() {
        
    }
    goal() {
       
    }
    achieve(){
        
    }
    mesage:string;
}

