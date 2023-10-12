import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderDulceComponent } from './header-dulce/header-dulce.component';
import { BodyDulceComponent } from './body-dulce/body-dulce.component';
import { FooterDulceComponent } from './footer-dulce/footer-dulce.component';
import { VerProductosComponent } from './ver-productos/ver-productos.component';
import { BodyAppComponent } from './body-app/body-app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NuevaApiService } from './servicios/nueva-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderDulceComponent,
    BodyDulceComponent,
    FooterDulceComponent,
    VerProductosComponent,
    BodyAppComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NuevaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
