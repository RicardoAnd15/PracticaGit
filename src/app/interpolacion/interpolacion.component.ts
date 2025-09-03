import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  standalone: true,
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  titulo = 'Interpolacion en Angular!';
  
  usuario = {
    nombre: 'Juan',
    edad: 25 
  }

  saludar() {
    return `Hola, ${this.usuario.nombre}`;
  }
}
