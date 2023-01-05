import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductoComponentService {

  constructor(private http: HttpClient) { }

  getProductos(pageActual: any) {
    return this.http.get('http://localhost:8081/productos?activo=true&page=' + pageActual);
  }

}
