import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.css'
})
export class EjemploPipesComponent {
  empleados = [
    {nombre: 'Ricardo Andres', salario: 1500, fechaNacimiento: new Date('2002-03-15')},
    {nombre: 'Cesar Ordoñez', salario: 32000, fechaNacimiento: new Date('1994-04-26')},
    {nombre: 'Reyand Ordoñez', salario: 16000, fechaNacimiento: new Date('1998-06-09')}
  ]
}
