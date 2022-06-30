import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  branchLocation="Dadar";
   
  @Input() 
  company="";

  @Output()
  emitEvent=new EventEmitter<string>();
 
  constructor() { }

  ngOnInit(): void {
    console.log("in init method");
    
   this.emitEvent.emit(this.branchLocation);
  }
 
  sendData(){
    console.log("in sendData method");
    
    this.emitEvent.emit(this.branchLocation);
  }
}
