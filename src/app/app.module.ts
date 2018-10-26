import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UnderNavbarComponent } from './under-navbar/under-navbar.component';
import { TopRowComponent } from './top-row/top-row.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UnderNavbarComponent,
    TopRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
