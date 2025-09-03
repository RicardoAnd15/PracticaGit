import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  // @Output() notificarPadre = new EventEmitter<String>();

  // enviarMensaje(){
  //   this.notificarPadre.emit('Notificacion desde el componente hijo');
  // }
  mensaje: String = 'Mensaje desde el componente hijo';

  cambiarMensaje(nuevoMensaje: String) {
    this.mensaje = nuevoMensaje;
  }
}
