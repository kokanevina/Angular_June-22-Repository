import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrainService {
  url="http://127.0.0.1:3001/localtrains";
  constructor(private _http:HttpClient) { 

  }
  getAllTrains():Observable<any>{
        return this._http.get(this.url);
  }
  deleteTrain(id:number):Observable<any>{
        return this._http.delete(`${this.url}/1212`);
  }
  addTrain(trainOb:any){
    console.log(trainOb);
    
    return this._http.post(this.url,{
      "trainId": 1212,
      "trainRoute": "Central",
      "trainSource": "dombivali",
      "trainDestination": "cst"
    });
  }
}
