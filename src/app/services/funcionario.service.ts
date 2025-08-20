import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Funcionario {
  nomeCompleto: string;
  salario: number;
  cargo: string;
  numeroDependentes: number;
  opcaoVT: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private funcionarios: Funcionario[] = [];
  private funcionariosSubject = new BehaviorSubject<Funcionario[]>([]);

  getFuncionarios(): Observable<Funcionario[]> {
    return this.funcionariosSubject.asObservable();
  }

  adicionarFuncionario(funcionario: Funcionario): void {
    this.funcionarios.push(funcionario);
    this.funcionariosSubject.next(this.funcionarios);
  }
}
