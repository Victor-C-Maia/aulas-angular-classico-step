import { Component, OnInit } from '@angular/core';
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
export class ListaFuncionariosComponent implements OnInit {
  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService, private router: Router) {}

  ngOnInit(): void {
    this.funcionarioService.getFuncionarios().subscribe(data => this.funcionarios = data);
  }

  verDetalhes(index: number) {
    this.router.navigate(['/funcionario', index]);
  }
}
