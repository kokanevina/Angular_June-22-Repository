import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit,OnChanges,DoCheck,OnDestroy {
  @Input()
  company="";
  @Input()
  ctArray:string[]=[];
  arLength=0;
  constructor() { }
 

  ngOnInit(): void {
    console.log("in ngOnInit");
    length=this.ctArray.length;
    console.log(length);
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("in ngOnChanges");
    console.log(changes);
    
  }
  ngDoCheck(): void {
    console.log(this.arLength);
    console.log(this.ctArray.length);
    if(this.arLength<this.ctArray.length){
      console.log("Array change detected");
      this.arLength=this.ctArray.length;
    }
  }
  ngOnDestroy(): void {

   console.log("in Destroy");
   
  }

  
}
