
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LogInComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'administrar/productos', loadChildren: () => import('./crud-producto/crud-producto.module').then(m => m.CRUDProductoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
