import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  standalone: false,
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.css'
})
export class FilhoComponent {
  @Input() nome: string = '';
  @Output() clicado = new EventEmitter<string>();
  
  enviarMensagem() {
    this.clicado.emit("Olá, Filho!")
  }
}
