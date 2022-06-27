import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  passPattern=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,15})");
  constructor() {
   }

  ngOnInit(): void {
      this.registerForm=new FormGroup({
          name:new FormControl("",[Validators.required, Validators.minLength(2)]),
          emailId:new FormControl("",[Validators.required,Validators.email]),
          age:new FormControl("",[Validators.required,Validators.min(16),Validators.max(40)]),
          username:new FormControl("",[Validators.required, Validators.minLength(4),Validators.maxLength(12)]),
          password:new FormControl("",[Validators.required,Validators.pattern(this.passPattern)]),
          confirmPassword:new FormControl("",[Validators.required])
      });
  }
  get uname(){
    return this.registerForm.get('username');
  }
  get pass(){
    return this.registerForm.get('password');
  }
  get name(){
    return this.registerForm.get('name');
  }
  get mail(){
    return this.registerForm.get('emailId');
  }
  get age(){
    return this.registerForm.get('age');
  }
  get cpass(){
    return this.registerForm.get('confirmPassword');
  }
  collectForm(){
    console.log(this.registerForm);
   
  }

}