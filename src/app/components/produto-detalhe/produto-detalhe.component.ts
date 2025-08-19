import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  template: `<h2>Produto Detalhe</h2>`
})
export class ProdutoDetalheComponent implements OnInit {
  idProduto: string | null | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // const id = params.get('id');
      // console.log('ID recebido pela rota:', id);
      this.idProduto = params.get('id');
      // this.produto = params.get()
    });
  }
}
