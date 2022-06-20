import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  array=['HOME', 'ABOUT US', 'DEPARTMENTS','CONTACT US'];
  constructor() { }

  ngOnInit(): void {
  }

}
