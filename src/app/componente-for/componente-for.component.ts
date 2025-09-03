import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-for',
  standalone: true,
  imports: [],
  templateUrl: './componente-for.component.html',
  styleUrl: './componente-for.component.css'
})
export class ComponenteForComponent {
  tareas: String[] = [
    'Aprender angular',
    'Desarrollar una app',
    'Aprender TypeScript'
  ]

  agregarTarea(nuevaTarea: String){
    if (nuevaTarea) {
      this.tareas.push(nuevaTarea);
    }
  }
}
