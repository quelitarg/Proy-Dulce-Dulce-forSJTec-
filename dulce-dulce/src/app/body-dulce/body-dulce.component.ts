import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-dulce',
  templateUrl: './body-dulce.component.html',
  styleUrls: ['./body-dulce.component.css']
})
export class BodyDulceComponent {

  constructor(private router: Router){}
    
  navegarProductos(){
      this.router.navigate(['/productos']);
    }
  
}
