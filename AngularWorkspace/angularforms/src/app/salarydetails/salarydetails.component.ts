import { Component, OnInit } from '@angular/core';
import { SalaryDetails } from '../Data/SalaryDetails';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-salarydetails',
  templateUrl: './salarydetails.component.html',
  styleUrls: ['./salarydetails.component.css']
})
export class SalarydetailsComponent implements OnInit {

  employeeId:number=0;
  employeeName:string='';
  empFound:SalaryDetails;
  constructor(private _routeService:ActivatedRoute) { }

  ngOnInit(): void {
      this.employeeId=parseInt(this._routeService.snapshot.paramMap.get('id'));
      this.employeeName=this._routeService.snapshot.paramMap.get('name');
      this.search();
  }

  salaryArray=[
    new SalaryDetails(456,45000,3000,1000,50000,49000),
    new SalaryDetails(156,55000,3000,1000,60000,59000),
    new SalaryDetails(426,45900,3000,1000,51000,50000),
    new SalaryDetails(455,35000,3000,1000,40000,39000),
    new SalaryDetails(256,35000,3000,1000,40000,39000),
    new SalaryDetails(406,45600,3000,1000,50500,50000),
    new SalaryDetails(455,65000,3000,1000,70000,69000)
  ];

  search(){
      console.log("in search"+this.employeeId);
      // find SalaryDetails object from salaryArray where empId=employeeId
      this.empFound=this.salaryArray.find(obj=>obj.empId===this.employeeId);
      console.log(this.empFound);
      
  }
}
