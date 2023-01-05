import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LogInComponentService } from 'src/app/log-in/log-in-service/log-in-component.service';
import { PanelProductoService } from 'src/app/servicios/service-panel-producto/panel-producto.service';
import { ServiceProductoComponentService } from 'src/app/servicios/service-producto/service-producto-component.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ModificarComponent{

}
