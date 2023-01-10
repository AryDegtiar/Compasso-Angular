import { Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LogInComponentService } from '../log-in/log-in-service/log-in-component.service';
import { PanelProductoService } from '../servicios/service-panel-producto/panel-producto.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  inicioActivo = true;
  inicioContacto = false;
  logIn = false;

  navbarAdmin = false;

  constructor(private router: Router, private logInService: LogInComponentService, private panelService: PanelProductoService,
    private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.logInService.getLogeo().subscribe((data: any) => {
      if(data != null){
        this.navbarAdmin = true;
      }else{
        this.navbarAdmin = false;
      }
      this.cdr.detectChanges();
    });
  }

  irInicio(){
    this.inicioActivo = true;
    this.inicioContacto = false;
    this.logIn = false;
    this.router.navigate(['inicio']);
  }

  irContacto(){
    this.inicioActivo = false;
    this.logIn = false;
    this.inicioContacto = true;
    this.router.navigate(['contacto']);
  }

  irLogIn(){
    this.inicioActivo = false;
    this.inicioContacto = false;
    this.logIn = true;
    this.router.navigate(['login']);
  }

  logOut(){
    this.logInService.cerrarSesion();
    this.router.navigate(['']);
  }

}
