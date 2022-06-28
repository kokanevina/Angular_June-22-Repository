import { Component, OnInit } from '@angular/core';
import { Employee } from '../Data/Employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  empArray:Employee[]=[
    new Employee(456,'hari',45000),
    new Employee(156,'pari',55000),
    new Employee(426,'harish',45900),
    new Employee(455,'sukhar',35000),
    new Employee(256,'kalpesh',35000),
    new Employee(406,'sona',45600),
    new Employee(455,'mona',65000)
  ]
}
