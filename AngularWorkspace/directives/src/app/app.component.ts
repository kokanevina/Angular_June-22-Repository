import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  age=0;
  array=['tea', 'coffee', 'green tea'];

  techArr=['java','javascript','python'];
  subArr=['core','advaced']
  choice=3;
  hotD="";
  perc=45;
  bgColor='yellow';

 myStyle={
  border:'5px solid pink',   /*javasciprt keys */
  backgroundColor:this.bgColor,
  color:'blue',
  'margin-top':'10px' /*css key is allowed in javascript object */
 }
 setBg(){
  console.log("In function");
  this.myStyle.backgroundColor=this.bgColor;
  this.myStyle['margin-top']='60px';  // another way to access object keys
 }

 styleArray=['fontClass', 'borderClass', 'colorClass'];

 myClassStyle={
  'fontClass':false,
  'borderClass':true,
  'colorClass':true
 }
}
