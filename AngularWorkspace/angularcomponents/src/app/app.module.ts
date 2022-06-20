import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { OrderlistComponent } from './header/navbar/orderlist/orderlist.component';
import { ListitemComponent } from './header/navbar/orderlist/listitem/listitem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    OrderlistComponent,
    ListitemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
