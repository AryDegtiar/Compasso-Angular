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

  constructor(private router: Router, private logInService: LogInComponentService, private panelService: PanelProductoService,
    private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.logInService.nuevaSesion.subscribe((data: any) => {
      alert("hola soy el navbar: "+ data);
      this.cdr.detectChanges();
    });
  }

  irInicio(){
    this.inicioActivo = true;
    this.inicioContacto = false;
    this.router.navigate(['inicio']);
  }

  irContacto(){
    this.inicioActivo = false;
    this.inicioContacto = true;
    this.router.navigate(['contacto']);
  }

}
