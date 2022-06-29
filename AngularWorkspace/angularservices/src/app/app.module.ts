import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MathService } from './MyServices/math.service';
import { Chidl1Component } from './chidl1/chidl1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';

@NgModule({
  declarations: [
    AppComponent,
    Chidl1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [], // MathService object will be shared
  bootstrap: [AppComponent]
})
export class AppModule { }
