import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ServiceProductoComponentService } from 'src/app/servicios/service-producto/service-producto-component.service';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ListProductosComponent implements OnInit{

  productos: any[] = [];
  paginas = 0;
  pageActual = 0;
  mostrarPaginacion = false;

  constructor(private serviceProducto: ServiceProductoComponentService) { }

  ngOnInit(): void {
    this.getProductos(this.pageActual);
  }

  getProductos(page: any) {
    this.serviceProducto.getProductos(page).subscribe((data: any) => {
        console.log(data);

        this.productos = data.content;
        this.paginas = data.totalPages - 1;

        console.log('paginas: ', this.paginas);
        console.log('productos: ', this.productos);

        if(this.paginas > 0){
          this.mostrarPaginacion = true;
        }

        console.log('mostrarPaginacion: ', this.mostrarPaginacion);

    });
  }

  previusPage(){
    if(this.pageActual > 0){
      this.pageActual = this.pageActual - 1;
      this.getProductos(this.pageActual);
    }
  }

  nextPage(){
    if(this.pageActual < this.paginas){
      this.pageActual = this.pageActual + 1;
      this.getProductos(this.pageActual);
    }
  }

}
