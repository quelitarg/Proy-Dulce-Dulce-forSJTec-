import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VerProductosComponent } from './ver-productos/ver-productos.component';
import { BodyDulceComponent } from './body-dulce/body-dulce.component';

const routes: Routes = [
  {path:'', component: BodyDulceComponent },
  {path:'productos', component: VerProductosComponent }
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
