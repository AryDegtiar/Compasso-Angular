import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInComponentService } from './log-in-service/log-in-component.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInComponent implements OnInit {
  constructor(private loginComponentService: LogInComponentService, private router: Router,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  logIn(datosLogIn:any){
    datosLogIn.preventDefault();

    const usu ={
      usuario: datosLogIn.target[0].value,
      contrasenia: datosLogIn.target[1].value
    }

    this.loginComponentService.buscarUsuario(usu).subscribe((usuario: any) => {

      if(usuario != null){

        //this.loginComponentService.nuevaSesion.emit(usuario);
        this.loginComponentService.setLogeo(usuario);
        this.router.navigate(['administrar/productos']);

      }

    }, (error) => {
      alert("Usuario o contraseña incorrectos");
    });

  }

}
