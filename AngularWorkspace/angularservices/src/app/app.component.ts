import { Component } from '@angular/core';
import { MathService } from './MyServices/math.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  num1:number=0;
  num2:number=0;
  result=0;
  constructor(private _mathservice:MathService){
  }

  add1(){
    this.result=this._mathservice.addFun(this.num1,this.num2);
  }
  sub1(){
    //implement logic here
  }
  
}
