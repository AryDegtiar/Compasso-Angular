import { Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  inicioActivo = true;
  inicioContacto = false;

  constructor(private router: Router) { }

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
