import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularhttp';
  trains:any[]=[];
  constructor(private _http:HttpClient){

  }
  getJsonData(){
    this._http.get("http://localhost:4200/assets/Db.json")
      .subscribe({
        next:successR=>
          console.log(successR)  ,
        error:errorR=>console.log(errorR)
      }
      );
  }
}
