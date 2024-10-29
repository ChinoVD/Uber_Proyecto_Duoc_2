import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../Servicios_Internos/Api/api-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  grupo: string = 'Chino_Claudio';
  selector: string = 'viajes';
  productos: any[] = [];

  constructor(private api: ApiRestService) {}

  ngOnInit() {
    this.obtenerProductos(this.selector);    
  }

  obtenerProductos(selector: string) {
    this.api.traerProductosPorGrupo(this.grupo).subscribe(
      (data: any) => {
        console.log('Respuesta de la API', data);
        this.productos = Array.isArray(data) ? data : [];
      },
      (error) => {
        console.error('Error al traer los productos', error);
      }
    );
  }

  onSegmentChange(event: any) {
    this.obtenerProductos(event.detail.value);
  }

}
