import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Task } from '../models/task';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "http://localhost:5000/tasks";
  constructor(private http:HttpClient) { }
  // R
  getTasks(){
    return this.http.get<Task[]>(this.url);
  }
  // D
  deleteTask(id){
    return this.http.delete(`${this.url}/${id}`);
  } 
  // C
  addTask(task){
    return this.http.post<Task>(this.url , task )
  }
  // U
  editTodo(task){
    return this.http.put(`${this.url}/${task.id}` , task)
  }
  searchTask(id){
      return this.http.get<Task>(`${this.url}/${id}`);
  }
}