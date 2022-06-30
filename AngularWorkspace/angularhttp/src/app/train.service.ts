import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrainService {
  apiUrl="http://localhost:3000/localtrains";
  handleError:any;
  constructor(private httpClient:HttpClient) { }
   // Delete
   delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`).pipe(
    );
  }
}
