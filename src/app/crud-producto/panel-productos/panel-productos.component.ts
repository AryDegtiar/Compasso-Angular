import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LogInComponentService } from 'src/app/log-in/log-in-service/log-in-component.service';
import { PanelProductoService } from 'src/app/servicios/service-panel-producto/panel-producto.service';

@Component({
  selector: 'app-panel-productos',
  templateUrl: './panel-productos.component.html',
  styleUrls: ['./panel-productos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelProductosComponent implements OnInit {

  usuarioID?: any;
  productos?: any;

  constructor(private logInService: LogInComponentService, private panelService: PanelProductoService,
    private cdr: ChangeDetectorRef,) { }

  ngOnInit(): void {
    alert("bienvenido a panel")

    this.logInService.usuarioID.subscribe((data: any) => {
      this.usuarioID = data;
      alert("obtuve id:  " + this.usuarioID);
      this.cdr.detectChanges();
    });

    this.logInService.nuevaSesion.subscribe((data: any) => {
      this.usuarioID = data;
      alert("soy panel:  " + this.usuarioID);
      this.cdr.detectChanges();
    });

    /*
    this.panelService.getProductos(this.usuarioID).subscribe((data: any) => {
      this.productos = data;
      alert("Productos: " + this.productos);
      console.log("Productos:");
      console.log(this.productos);
      this.cdr.detectChanges();
    });
    */

  }

}
