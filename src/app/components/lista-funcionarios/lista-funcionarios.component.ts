import { Component, OnInit, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FuncionarioService, Funcionario } from '../../services/funcionario.service';

@Component({
  selector: 'app-lista-funcionarios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.css']
})
export class ListaFuncionariosComponent implements OnInit, DoCheck {
  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService, private router: Router) {
    console.log('Constructor: ListaFuncionariosComponent instanciado');
  }

  ngOnInit(): void {
    console.log('ngOnInit: carregando lista de funcionários');
    this.funcionarioService.getFuncionarios().subscribe(data => this.funcionarios = data);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: ListaFuncionariosComponent detectando mudanças');
  }

  verDetalhes(index: number) {
    this.router.navigate(['/funcionario', index]);
  }
}
