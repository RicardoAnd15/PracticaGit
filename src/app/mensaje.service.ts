import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private mensaje:String ="Hola desde el servicio de mensajes";
  
  constructor() { }

  obtenerMensaje(): String{
    return this.mensaje;
  }
}
