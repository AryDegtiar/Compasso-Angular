import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRUDProductoRoutingModule } from './crud-producto-routing.module';
import { PanelProductosComponent } from './panel-productos/panel-productos.component';
import { ModificarComponent } from './modificar/modificar.component';
import { CrearComponent } from './crear/crear.component';


@NgModule({
  declarations: [
    PanelProductosComponent,
    ModificarComponent,
    CrearComponent,
  ],
  imports: [
    CommonModule,
    CRUDProductoRoutingModule
  ]
})
export class CRUDProductoModule { }
