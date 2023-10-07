import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.css']
})
export class VerProductosComponent {
  
  constructor(private router: Router){}
  
  navegarInicio(){
    this.router.navigate(['']);
  }

  
}
