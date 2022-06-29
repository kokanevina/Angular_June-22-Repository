import { Component, OnInit } from '@angular/core';
import { MathService } from '../MyServices/math.service';

@Component({
  selector: 'app-chidl1',
  templateUrl: './chidl1.component.html',
  styleUrls: ['./chidl1.component.css']
})
export class Chidl1Component implements OnInit {
  count=0;
  cname1='';
  constructor(private _maths:MathService) { }

  ngOnInit(): void {
    this.cname1=MathService.companyName; 
  }
  incr(){
    this._maths.incrementCounter();
    this.count=this._maths.getCounter();
  }
}
