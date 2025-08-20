import { Component, OnInit, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FuncionarioService, Funcionario } from '../../services/funcionario.service';

@Component({
  selector: 'app-funcionario-detalhes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './funcionario-detalhes.component.html',
  styleUrls: ['./funcionario-detalhes.component.css']
})
export class FuncionarioDetalhesComponent implements OnInit, DoCheck {
  funcionario!: Funcionario;
  id!: number;

  constructor(private route: ActivatedRoute, private funcionarioService: FuncionarioService) {
    console.log('Constructor: FuncionarioDetalhesComponent instanciado');
  }

  ngOnInit(): void {
    console.log('ngOnInit: carregando dados do funcionário');
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam;
        this.funcionarioService.getFuncionarios().subscribe(funcionarios => {
          this.funcionario = funcionarios[this.id];
        });
      }
    });
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: checando mudanças na view de detalhes');
  }
}
