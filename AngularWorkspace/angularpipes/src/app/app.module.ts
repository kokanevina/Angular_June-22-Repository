import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { CharAtPipe } from './custompipe/charat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CharAtPipe
  ],
  imports: [
    BrowserModule, OrderModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
