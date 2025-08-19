import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produto',
  standalone: false,
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  @Input() preco: number = 0;
  @Input() descricao: string = '';

  @Output() adicionar = new EventEmitter<string>();

  adicionarAoCarrinho() {
    this.adicionar.emit(`Produto "${this.descricao}" adicionado ao carrinho!`);
  }
}
