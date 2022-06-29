import { Component, OnInit } from '@angular/core';
import { MathService } from '../MyServices/math.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css'],
  providers:[MathService]
})
export class Child3Component implements OnInit {
  counttt=0;
  constructor(private _mathS:MathService) { }

  ngOnInit(): void {
   /*  setInterval(()=>{
      this.get();
},3000); */
  }
  getC(){
    this._mathS.incrementCounter();
     this.counttt=this._mathS.getCounter();
  }
}
