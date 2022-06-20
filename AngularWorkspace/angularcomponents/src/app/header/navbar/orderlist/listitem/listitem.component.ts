import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent implements OnInit {
  array=['HOME', 'ABOUT US', 'DEPARTMENTS','CONTACT US'];
  constructor() { }

  ngOnInit(): void {
  }

}
