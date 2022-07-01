import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Task } from '../models/task';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = environment.url;
  constructor(private http:HttpClient) { }
  // R
  getTasks(){
    return this.http.get<Task[]>(this.url+"/tasks");
  }
  // D
  deleteTask(id){
    return this.http.delete(`${this.url}/tasks/${id}`);
  } 
  // C
  addTask(task){
    return this.http.post<Task>(this.url+"/tasks" , task )
  }
  // U
  editTodo(task){
    return this.http.put(`${this.url}/tasks/${task.id}` , task)
  }
}