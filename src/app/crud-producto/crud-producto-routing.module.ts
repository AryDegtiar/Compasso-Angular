import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { ModificarComponent } from './modificar/modificar.component';
import { PanelProductosComponent } from './panel-productos/panel-productos.component';

const routes: Routes = [
  { path: '', component: PanelProductosComponent },
  { path: 'modificar/:idProducto', component: ModificarComponent },
  { path: 'crear', component: CrearComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRUDProductoRoutingModule { }
