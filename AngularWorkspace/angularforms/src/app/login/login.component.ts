import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  loginForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      username:new FormControl(),
      password:new FormControl()
  });
  }
  get uname(){
    return this.loginForm.get('username');
  }
  get pass(){
    return this.loginForm.get('password');
  }

  collectForm(){
    console.log(this.loginForm);
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);
  }
}
