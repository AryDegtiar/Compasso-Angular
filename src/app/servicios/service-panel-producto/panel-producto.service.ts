import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelProductoService {

  private url = "http://compasso-java-production.up.railway.app";

  productoEmiter = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  getProductos(usuarioID: any) {
    return this.http.get(this.url + '/administradores/' + usuarioID + '/productos');
  }

  getProducto(productoID: any, usuarioID: any) {
    return this.http.get(this.url + '/administradores/' + usuarioID + '/productos/' + productoID);
  }

  crearProducto(producto: any, usuarioID: any) {
    return this.http.post(this.url + '/administradores/' + usuarioID + '/productos', producto);
  }

  eliminarProducto(productoID: any, usuarioID: any) {
    return this.http.delete(this.url + '/administradores/' + usuarioID + '/productos/' + productoID);
  }

  recuperarProducto(productoID: any, usuarioID: any) {
    let recuperar = {
      "activo": true
    }
    return this.http.patch(this.url + '/administradores/' + usuarioID + '/productos/' + productoID, recuperar);
  }

  modificarProducto(productoID: any, usuarioID: any, productoModificado: any) {
    return this.http.patch(this.url + '/administradores/' + usuarioID + '/productos/' + productoID, productoModificado);
  }

  notificarProducto(producto: any) {
    this.productoEmiter.emit(producto);
  }

  subirImagen(productoID:any, usuarioID:any,formData: FormData) {
    return this.http.post(this.url + '/administradores/' + usuarioID + '/productos/' + productoID + '/imagen', formData);
  }

}
