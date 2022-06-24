import { Component } from '@angular/core';
import { Employee } from './Data/Employees';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angUlaR##piPEs##demO';
  india="india-Is-MY-cOUNtry"

  salary=78900.457345;

  salaryArray=[78900.457345,79000,78900,76567.12, 56455.777,76789.5, 50000.4444]

  today=new Date();
  employees=[
    new Employee(321,'Kumar',78000,new Date('23-Dec-2000')),
    new Employee(121,'Kumari',88000,new Date('12-Dec-2000')),
    new Employee(421,'Pooja',76000,new Date('12-Nov-2001')),
    new Employee(301,'Poonam',98000,new Date('12-Nov-1999')),
    new Employee(321,'Amol',78200,new Date('23-Sep-2002')),
    new Employee(323,'Bhushan',75000,new Date('23-Oct-2002')),
    new Employee(222,'Rajani',68000,new Date('10-Jan-2000')),
    new Employee(111,'Janki',56000,new Date('12-Jun-2003')),
    new Employee(122,'arun',99000,new Date('30-May-2004')),
    new Employee(333,'bhavana',55000,new Date('23-Aug-2002'))
  ]
  property='id';
  sortBy(key:string){
    this.property=key;
  }
  caseState=false;
  test(event:any){
    if(event.target.value=='true')
      this.caseState=true;
    else
      this.caseState=false;
  }
}
