import { Component, OnInit } from '@angular/core';
import { MathService } from '../MyServices/math.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  countt=0;
  cname2='';
  constructor(private _math:MathService) { }

  ngOnInit(): void {
   /*  setInterval(()=>{
      this.get();
},3000); */

  this.cname2=MathService.companyName;
  }
  get(){
     this.countt=this._math.getCounter();
  }
}
