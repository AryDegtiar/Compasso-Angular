import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LogInComponentService } from 'src/app/log-in/log-in-service/log-in-component.service';
import { LogInComponent } from 'src/app/log-in/log-in.component';
import { PanelProductoService } from 'src/app/servicios/service-panel-producto/panel-producto.service';

@Component({
  selector: 'app-panel-productos',
  templateUrl: './panel-productos.component.html',
  styleUrls: ['./panel-productos.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PanelProductosComponent implements OnInit {

  usuarioID?: any;
  productos?: any;
  productosActivos?: any;
  productosInactivos?: any;

  constructor(private logInService: LogInComponentService, private panelService: PanelProductoService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    var AOS = require('aos');
    AOS.init();

    this.logInService.getLogeo().subscribe((data: any) => {
      this.usuarioID = data;
      this.cdr.detectChanges();
    });

    this.obtenerProductos();

    this.panelService.productoEmiter.subscribe((data: any) => {
      this.obtenerProductos();
      this.cdr.detectChanges();
    });

  }

  obtenerProductos(){
    this.panelService.getProductos(this.usuarioID).subscribe((data: any) => {
      this.productos = data;
      console.log("Productos del usuario:");
      console.log(this.productos);
      this.ordernarProductos();
      this.cdr.detectChanges();
    });
  }

  ordernarProductos(){
    this.productosActivos = this.productos.filter((producto: any) => producto.activo === true);
    this.productosInactivos = this.productos.filter((producto: any) => producto.activo === false);
    this.productos = null;
  }

  eliminarProducto(productoID: any){
    this.panelService.eliminarProducto(productoID, this.usuarioID).subscribe((data: any) => {
      console.log("Producto eliminado:");
      console.log(data);
      this.panelService.notificarProducto(data);
      this.cdr.detectChanges();
    });
  }

  recuperarProducto(productoId: any){
    this.panelService.recuperarProducto(productoId, this.usuarioID).subscribe((data: any) => {
      console.log("Producto recuperado:");
      console.log(data);
      this.panelService.notificarProducto(data);
      this.cdr.detectChanges();
    });
  }

}
