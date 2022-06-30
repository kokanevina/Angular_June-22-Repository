import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { TrainService } from './train.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularhttp';
  trains:any[]=[];
  url="http://localhost:3000/localtrains";
  constructor(private _http:HttpClient){

  }
  getJsonData(){
      this._http.get(this.url).subscribe(
        {
          next:res=>{console.log(res);
          this.trains=res as any[];      
        },      
          error:err=>console.log(err)
        }
      );
    
  }
  deleteTrain(trainId:number){
   this._http.delete(`${this.url}/${trainId}`).subscribe({
    next:res=>console.log(res),
    error:err=>console.log(err)
  });
  }

}
