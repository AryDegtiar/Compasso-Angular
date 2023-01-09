import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInComponentService {

  private url = "http://compasso-java-production.up.railway.app";

  usuarioID?: any;

  logeo$ = new BehaviorSubject<any>(this.usuarioID);

  constructor(private http: HttpClient) { }

  getLogeo(){
    return this.logeo$;
  }

  setLogeo(usuario: any){
    this.logeo$.next(usuario);
  }

  cerrarSesion(){
    this.logeo$.next(null);
  }

  buscarUsuario(usu: any){
    return this.http.post(this.url + '/administradores/login', usu);
  }

}
