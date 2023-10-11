import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class NuevaApiService {
   URI: string = `https://songwhip.com/create?q=`;
  constructor(private http: HttpClient) { }

  getNuevaApi(primeraPalabra: string, segundaPalabra: string) {
  return this.http.get(`${this.URI}${primeraPalabra}%20${segundaPalabra}`); 
  } 
}

