import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  age=0;
  array=['tea', 'coffee', 'green tea'];

  techArr=['java','javascript','python'];
  subArr=['core','advaced']
  choice=3;
  hotD="";
  perc=45;
}
