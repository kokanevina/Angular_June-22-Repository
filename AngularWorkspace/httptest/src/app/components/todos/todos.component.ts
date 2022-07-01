import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  notFound=false;
  elemntData:Task[]=[];
  resultTodos:Task[]=[];
  sid = 0;
  showForm = false;
  editDorm = false
  myTodo:Task = {
    // id:number;
    task:"",
    date:"", 
    completed: false
  } ;
  addTask = false
  constructor( private data:DataService) { }
  ngOnInit(): void {
    console.log("In on init");
    
    this.getAll();
  }
  // R
  getAll(){
    this.data.getTasks()
        .subscribe({
          next: res=>{ 
            this.resultTodos =res as Task[];
            console.log(this.resultTodos);         
          },
          error:err=>console.log(err)  
        });
  }
  // D
  deleteTask(id){
    this.data.deleteTask(id)
        .subscribe({     
          next: res=>console.log(res),
          error:err=>console.log(err)  
        })
    this.getAll();
  }
  // C
  creatTask(){
    this.data.addTask(this.myTodo)
        .subscribe({
          next: res=>console.log(res),
          error:err=>console.log(err)  
        });
        this.getAll();
  }
  emptyTodo(){
    this.myTodo = {
      // id:number;
      task:"",
      date:"", 
      completed: false
    } ;
  }
  // U
  editTask(task){
    this.myTodo = task  
    this.showForm = true
    this.editDorm = true
  }
  updateTodo(){
    this.data.editTodo(this.myTodo)
        .subscribe(task =>{
          this.emptyTodo();
          this.showForm = false
        })
  }
  // find task
  findTask(){
      if(this.sid!=null){
        this.data.searchTask(this.sid).subscribe({
          next: res=>{
            console.log(res);
            this.resultTodos=[];
            this.resultTodos.push(res);
          },
          error:err=>{
            this.resultTodos=[];
            this.notFound=true
          }
        });
      } 
     else{
      this.getAll();
     }
  }
  
}
