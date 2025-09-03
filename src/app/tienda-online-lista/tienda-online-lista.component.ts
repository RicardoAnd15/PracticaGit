import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tienda-online-lista',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tienda-online-lista.component.html',
  styleUrl: './tienda-online-lista.component.css'
})

export class TiendaOnlineListaComponent {

  productos: Producto[] = [
    {nombre: 'Aprender Angular', precio: 100},
    {nombre: 'Aprender TypeScript', precio: 120},
    {nombre: 'Aprender JavaScript', precio: 80},
  ]

  agregarProducto(nombre:String, precio:String):void {
    if (nombre && precio) {
      const producto = new Producto(nombre, Number(precio))
      this.productos.push(producto);
    }else{
      alert('Por favor complete todos los campos');
    }
  }
}

export class Producto {
  constructor(
    public nombre: String,
    public precio: Number
  ) {}
}
