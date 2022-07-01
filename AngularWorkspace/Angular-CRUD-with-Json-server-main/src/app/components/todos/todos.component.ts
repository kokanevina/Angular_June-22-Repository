import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  elemntData:Task[]=[];
  resultTodos:Task[]=[];
  seache = ""
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
  // R
  getAll(){
    this.data.getTasks()
        .subscribe( tasks => {
         this.resultTodos =  this.elemntData = tasks
        })
  }
  // D
  deleteTask(id){
    this.data.deleteTask(id)
        .subscribe(()=>{
          this.elemntData = this.elemntData.filter(todo => todo.id != id )
        })
  }
  // C
  creatTask(){
    this.data.addTask(this.myTodo)
        .subscribe((todo) =>{
          this.elemntData = [todo, ...this.elemntData]
          this.emptyTodo()
          this.showForm = false
        })
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
    this.resultTodos = this.elemntData.filter((item) => item.task.toLocaleLowerCase().includes(this.seache.toLocaleLowerCase()))
  }
  ngOnInit(): void {
    this.getAll()
  }
}
