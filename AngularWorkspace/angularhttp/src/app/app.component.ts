import { Component } from '@angular/core';
import { TrainService } from './train.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  trains:any[]=[];
 

  constructor(private _train:TrainService){
  }
  /* getJsonData(){
     this._http.get(this.url).subscribe(
      {
        next:res=>this.trains=res as any[],
        error:err=>console.log(err)
        
      }
     );
  }
  deleteTrain(trainId:number){
   this._http.delete(`${this.url}/${trainId}`).subscribe({
    next:res=>console.log(res),
    error:err=>console.log(err)
  });
  } */

   getTrains(){
     this._train.getAllTrains().subscribe({
      next:res=>{this.trains=res as any[], console.log(this.trains);
      },
      error:err=>console.log(err)
    });
   
  }
  async delTrain(tid:number){
    await this._train.deleteTrain(tid).subscribe({
      next:res=>console.log(res),
      error:err=>console.log(err)
    });
    this.getTrains();
  }

}
