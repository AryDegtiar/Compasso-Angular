import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInComponentService } from 'src/app/log-in/log-in-service/log-in-component.service';
import { PanelProductoService } from 'src/app/servicios/service-panel-producto/panel-producto.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CrearComponent implements OnInit {

  usuarioID: any;

  producto = {
    nombre: "",
    descripcion: "",
    fichaTecnica: "",
    imagen: ""
  }

  constructor(private router: Router, private logInService: LogInComponentService,
    private cdr: ChangeDetectorRef, private panelService: PanelProductoService) { }

  ngOnInit(): void {
    this.logInService.getLogeo().subscribe((data: any) => {
      this.usuarioID = data;
      this.cdr.detectChanges();
    });

  }

  crearProducto(){
    if(this.producto.nombre === "" || this.producto.descripcion === "" || this.producto.fichaTecnica === "" || this.producto.imagen === ""){
      alert("Por favor, rellene todos los campos");
      return;
    }else{
      this.panelService.crearProducto(this.producto, this.usuarioID).subscribe((data: any) => {
        console.log(data);
        this.panelService.notificarProducto(data);
        this.cdr.detectChanges();
      });

      this.router.navigate(['administrar/productos']);
    }

  }

}
