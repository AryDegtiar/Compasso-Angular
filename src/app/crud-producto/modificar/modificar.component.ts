import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogInComponentService } from 'src/app/log-in/log-in-service/log-in-component.service';
import { PanelProductoService } from 'src/app/servicios/service-panel-producto/panel-producto.service';
import { ServiceProductoComponentService } from 'src/app/servicios/service-producto/service-producto-component.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ModificarComponent implements OnInit{

  maxTamanioImagen = 15000000; // 15 mb

  usuarioID: any;
  productoID: any;

  archivos: any = [];

  producto = {
    nombre: "",
    descripcion: "",
    fichaTecnica: "",
    //imagen: ""
  }

  constructor(private logInService: LogInComponentService, private cdr: ChangeDetectorRef,
    private panelService: PanelProductoService,
    private router: Router, private rutaActiva: ActivatedRoute) {}

  ngOnInit(): void {
    var AOS = require('aos');
    AOS.init();

    this.logInService.getLogeo().subscribe((data: any) => {
      this.usuarioID = data;
      this.cdr.detectChanges();
    });

    this.productoID = this.rutaActiva.snapshot.params['idProducto'];

    this.panelService.getProducto(this.productoID, this.usuarioID).subscribe((data: any) => {
      this.producto = data;
      this.cdr.detectChanges();
    });
  }

  modificarProducto(){
    if(this.producto.nombre === "" && this.producto.descripcion === "" && this.producto.fichaTecnica === "" && this.archivos.length === 0){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, rellene al menos un campo'
      });
      return;
    }else{
      this.panelService.modificarProducto(this.productoID, this.usuarioID, this.producto).subscribe((data: any) => {
        console.log(data);

        if(this.archivos.length > 0){
          this.subirImagen(data);
        }

        this.panelService.notificarProducto(data);
        this.cdr.detectChanges();
      });

      this.router.navigate(['administrar/productos']);
    }
  }

  capturarFile(event:any){
    if(event.target.files[0].size < this.maxTamanioImagen){
      const archivoCapturado = event.target.files[0];
      this.archivos.push(archivoCapturado);
    }else{
      event.target.value = "";
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El archivo es demasiado grande'
      });
    }
  }

  subirImagen(prodCreado: any){
    const formData = new FormData();
    this.archivos.forEach((archivo: any) => {
      formData.append('file', archivo);
    });

    this.panelService.subirImagen(prodCreado.id, this.usuarioID, formData).subscribe((data: any) => {
      console.log(data);
      this.cdr.detectChanges();
    });
  }

}
