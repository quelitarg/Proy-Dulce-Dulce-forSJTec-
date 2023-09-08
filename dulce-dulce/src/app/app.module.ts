import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderDulceComponent } from './header-dulce/header-dulce.component';
import { BodyDulceComponent } from './body-dulce/body-dulce.component';
import { FooterDulceComponent } from './footer-dulce/footer-dulce.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderDulceComponent,
    BodyDulceComponent,
    FooterDulceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
