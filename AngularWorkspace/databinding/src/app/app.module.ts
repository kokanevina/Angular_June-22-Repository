import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MathsComponent } from './maths/maths.component';
import { AttributeComponent } from './attribute/attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    MathsComponent,
    AttributeComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
