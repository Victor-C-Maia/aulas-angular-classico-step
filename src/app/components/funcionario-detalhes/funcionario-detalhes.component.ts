import { Component, OnInit } from '@angular/core';
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
export class FuncionarioDetalhesComponent implements OnInit {
  funcionario!: Funcionario;
  id!: number;

  constructor(private route: ActivatedRoute, private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
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
}
