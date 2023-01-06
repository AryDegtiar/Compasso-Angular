import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRUDProductoRoutingModule } from './crud-producto-routing.module';
import { PanelProductosComponent } from './panel-productos/panel-productos.component';
import { ModificarComponent } from './modificar/modificar.component';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PanelProductosComponent,
    ModificarComponent,
    CrearComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CRUDProductoRoutingModule
  ]
})
export class CRUDProductoModule { }
