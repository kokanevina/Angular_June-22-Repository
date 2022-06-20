import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maths',
  templateUrl: './maths.component.html',
  styleUrls: ['./maths.component.css']
})
export class MathsComponent implements OnInit {
  number1=0;
  number2=0;
  result=0;
  result1=0;
  constructor() { }
  ngOnInit(): void {
  }
  add(){
    this.result=this.number1+this.number2;
  }
  add2(num1:string,num2:string){
    this.result1=parseFloat(num1)+parseFloat(num2);
  } 
  add1(node1:any,node2:any){
   console.log(node1);
   console.log(node2);
   console.log(node1.value);
   console.log(node2.value);
   console.log(typeof node1.value);
   this.result1=parseFloat(node1.value)+parseFloat(node2.value);
  }

}
