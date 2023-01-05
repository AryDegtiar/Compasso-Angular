import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { InfoComponent } from './info/info.component';
import { BannerContactoComponent } from './banner-contacto/banner-contacto.component';
import { ListProductosComponent } from './list-productos/list-productos.component';


@NgModule({
  declarations: [
    InicioComponent,
    PresentacionComponent,
    InfoComponent,
    BannerContactoComponent,
    ListProductosComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
