import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductoComponentService {

  private url = "http://compasso-java-production.up.railway.app";

  constructor(private http: HttpClient) { }

  getProductos(pageActual: any) {
    return this.http.get(this.url + '/productos?activo=true&page=' + pageActual);
  }

}
