import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelProductoService {

  constructor(private http: HttpClient) { }

  getProductos(usuarioID: any) {
    return this.http.get('http://localhost:8081/administradores/' + usuarioID + '/productos');
  }

}
