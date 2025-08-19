import { Component } from '@angular/core';

@Component({
  selector: 'app-pai',
  standalone: false,
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.css'
})
export class PaiComponent {
  nomeUsuario: string = 'Fabio';
  responder(mensagem: string) {
    console.log(mensagem);
  }
}
