import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: false,
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  @Input() usuario: { nome: string; idade: number } = { nome: '', idade: 0 };
  @Output() apresentacao = new EventEmitter<string>();

  apresentar() {
    this.apresentacao.emit(`Sou ${this.usuario.nome}, e tenho ${this.usuario.idade} anos.`);
  }
}
