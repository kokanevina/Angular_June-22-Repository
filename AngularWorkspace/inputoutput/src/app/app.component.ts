import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 companyName="Neosoft technologies";
 branch="";
 getChildData(data:string){
  console.log(data);
  this.branch=data;
 }
}
