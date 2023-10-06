import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VerProductosComponent } from './ver-productos/ver-productos.component';
import { BodyAppComponent } from './body-app/body-app.component';

const routes: Routes = [
  {path:'', component: BodyAppComponent },
  {path:'productos', component: VerProductosComponent }
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
