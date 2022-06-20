import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // logic of one way data binding
 //string interpolation
  india="India is my country. All indians are my brothers and sisters";

  // logic of two way data binding
  // logic of ng-model : directive
  companyName="Neosoft Technologies";
  updateModel(ev:any){
    console.log(ev);
    // changes in view will update the model also
    console.log(this.companyName); 
  }
}
