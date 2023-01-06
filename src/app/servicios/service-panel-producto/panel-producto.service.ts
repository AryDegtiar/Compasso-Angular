import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelProductoService {

  productoEmiter = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  getProductos(usuarioID: any) {
    return this.http.get('http://localhost:8081/administradores/' + usuarioID + '/productos');
  }

  getProducto(productoID: any, usuarioID: any) {
    return this.http.get('http://localhost:8081/administradores/' + usuarioID + '/productos/' + productoID);
  }

  crearProducto(producto: any, usuarioID: any) {
    return this.http.post('http://localhost:8081/administradores/' + usuarioID + '/productos', producto);
  }

  eliminarProducto(productoID: any, usuarioID: any) {
    return this.http.delete('http://localhost:8081/administradores/' + usuarioID + '/productos/' + productoID);
  }

  recuperarProducto(productoID: any, usuarioID: any) {
    let recuperar = {
      "activo": true
    }
    return this.http.patch('http://localhost:8081/administradores/' + usuarioID + '/productos/' + productoID, recuperar);
  }

  modificarProducto(productoID: any, usuarioID: any, productoModificado: any) {
    return this.http.patch('http://localhost:8081/administradores/' + usuarioID + '/productos/' + productoID, productoModificado);
  }

  notificarProducto(producto: any) {
    this.productoEmiter.emit(producto);
  }

}
