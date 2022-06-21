import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  pass="";
  state=false;
  inputType="password";
  typeArray=['1','A','a','I','i'];   
  i=0;
  myType=this.typeArray[this.i];
  constructor() { }
  ngOnInit(): void {
  }
  showPassword(){
    console.log(this.state);
    console.log(this.pass); 
    if(this.state==true)
      this.inputType="text";
    else
      this.inputType="password";
  }
  change(){
    if(this.i>=this.typeArray.length-1)
      this.i=0;
    else
      this.i++;
    this.myType=this.typeArray[this.i];
  }

  myImg={
    'src':"assest/r.png",
    'height':100,
    'width':100,
    'altMessage':'Sachin Tendulkar'
  }

}
