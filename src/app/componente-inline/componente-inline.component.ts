import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-inline',
  standalone: true,
  imports: [],
  template: `
  <h1 class="text-danger">{{tituloComponenteInline}}</h1>
    <p>
      componente-inline trabajando!
    </p>
  `,
  styles: `
  h1{
    color: blue;
  }

  p{
    font-size: 20px;
    color: green;
  }
  `
})
export class ComponenteInlineComponent {
tituloComponenteInline = "Componente inline!";
}
