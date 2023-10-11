import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevaApiService } from './servicios/nueva-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.css']
})

export class VerProductosComponent implements OnInit {
  
  ngOnInit(): void {
    
  }
  artista: any;
  signupForm: FormGroup;
  
  constructor(private _builder: FormBuilder, private router: Router, private nuevaApiServices: NuevaApiService ) {
    this.signupForm = this._builder.group({
    nombre:[''],
    apellido:[''],
    email:['', Validators.compose([Validators.email, Validators.required])]
  })

  }
  enviar(values: any) {
    console.log(values);
  }

  navegarInicio(){
    this.router.navigate(['']);
  }

  fetchNuevaApi(primeraPalabra:string, segundaPalabra: string) {
    this.nuevaApiServices.getNuevaApi(primeraPalabra, segundaPalabra)
    .subscribe(
      (response) =>{
        console.log(response);
      this.artista = response}
      ,
      (err) => {
        console.log(err);
      },
      () => {
        console.log('Solicitud completada');
      }
      );
    }
  submitDatos(primeraPalabra: HTMLInputElement, segundaPalabra:HTMLInputElement) {
    if(primeraPalabra.value || segundaPalabra.value) {
      this.fetchNuevaApi(primeraPalabra.value, segundaPalabra.value)

      primeraPalabra.value = '';
      segundaPalabra.value ='';
      } else {
        alert('Ingrese los datos correctamente')
      }
     
      primeraPalabra.focus ()
      return false
       
  }

}
