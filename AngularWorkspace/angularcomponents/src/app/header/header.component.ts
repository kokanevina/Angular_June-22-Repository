import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    companyName:string; //undefined
  constructor() { 
    this.companyName="Neosoft Technologies Pvt Ltd";
  }

  ngOnInit(): void {

  }

}
