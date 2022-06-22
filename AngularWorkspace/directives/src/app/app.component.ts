import { Component } from '@angular/core';
import { Student } from 'src/Data/Student';
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
 studArray=[
            new Student(234,'hari','Nursary'), 
            new Student(111,'Poonam','Junior KG'),
            new Student(121,'Swara','Junior KG'),
            new Student(211,'Pooja','Nursary'),
            new Student(114,'Sanam','Junior KG'),
            new Student(112,'Pari','Senior KG'),
            new Student(115,'Krupa','Nursary'),
            new Student(113,'Harish','Senior KG'),
            new Student(118,'Sagar','Senior KG'),
            new Student(110,'Kalpesh','Junior KG')
          ];

      getColor(stdChoice:string){
        
      switch(stdChoice){
          case 'Nursary':
            return 'yellow'
          case  'Junior KG':
            return 'pink'
          case 'Senior KG' :
            return 'blue'
          default :
            return 'red'
      }
    }   
}
