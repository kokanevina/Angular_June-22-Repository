import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  constructor() {
   }

  ngOnInit(): void {
      this.registerForm=new FormGroup({
          name:new FormControl(),
          emailId:new FormControl(),
          age:new FormControl(),
          username:new FormControl(),
          password:new FormControl(),
          confirmPassword:new FormControl()
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
  get email(){
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
