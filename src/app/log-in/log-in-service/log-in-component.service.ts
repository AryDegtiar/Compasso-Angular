import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInComponentService {

  usuarioID?: any;

  nuevaSesion = new EventEmitter<any>

  constructor(private http: HttpClient) { }

  buscarUsuario(usu: any){
    this.usuarioID = this.http.post('http://localhost:8081/administradores/login', usu);
    return this.usuarioID;
  }

  guardarUsuarioID(usuarioID: any){
    this.usuarioID = usuarioID;
    alert("guardado: " + this.usuarioID);
    console.log("guardado: " + this.usuarioID);
  }

  notificar(){
    return this.nuevaSesion.emit(this.usuarioID);
  }

}
