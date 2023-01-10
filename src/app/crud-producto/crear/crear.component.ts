import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInComponentService } from 'src/app/log-in/log-in-service/log-in-component.service';
import { PanelProductoService } from 'src/app/servicios/service-panel-producto/panel-producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CrearComponent implements OnInit {

  btnCrear = true;

  maxTamanioImagen = 15000000; // 15 mb

  usuarioID: any;
  productoID: any;

  producto = {
    nombre: "",
    descripcion: "",
    fichaTecnica: "",
//    imagen: ""
  }

  archivos: any = [];

  constructor(private router: Router, private logInService: LogInComponentService,
    private cdr: ChangeDetectorRef, private panelService: PanelProductoService) { }

  ngOnInit(): void {
    var AOS = require('aos');
    AOS.init();

    this.logInService.getLogeo().subscribe((data: any) => {
      this.usuarioID = data;
      this.cdr.detectChanges();
    });

  }

  crearProducto(){
    this.btnCrear = false;
    if(this.producto.nombre === "" || this.producto.descripcion === "" || this.producto.fichaTecnica === "" || this.archivos.length === 0){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, rellene todos los campos'
      });
      return;
    }else{
      this.panelService.crearProducto(this.producto, this.usuarioID).subscribe((data: any) => {
        this.productoID = data.id;

        this.subirImagen(data);

        this.panelService.notificarProducto(data);
        this.cdr.detectChanges();
      });
    }
    this.btnCrear = true;
    this.router.navigate(['/administrar/productos']);
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

}
