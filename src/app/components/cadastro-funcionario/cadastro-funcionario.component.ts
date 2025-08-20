import { Component, OnInit, DoCheck, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FuncionarioService, Funcionario } from '../../services/funcionario.service';

@Component({
  selector: 'app-cadastro-funcionario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit, DoCheck, AfterViewInit {
  cadastroForm!: FormGroup;

  @ViewChild('nomeInput') nomeInput!: ElementRef;

  constructor(private fb: FormBuilder, private funcionarioService: FuncionarioService) {
    console.log('Constructor: CadastroFuncionarioComponent instanciado');
  }

  ngOnInit(): void {
    console.log('ngOnInit: Inicializando formulário');
    this.cadastroForm = this.fb.group({
      nomeCompleto: ['', [Validators.required, Validators.minLength(10)]],
      salario: [null, [Validators.required, Validators.min(1518)]],
      cargo: ['', Validators.required],
      numeroDependentes: [null, [Validators.required, Validators.max(4)]],
      opcaoVT: [null, Validators.required]
    });
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: checando mudanças no formulário');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: view inicializada, posso manipular elementos');
    this.nomeInput.nativeElement.focus();
  }

  get f() { return this.cadastroForm.controls; }

  onSubmit() {
    if (this.cadastroForm.valid) {
      const novoFuncionario: Funcionario = this.cadastroForm.value;
      this.funcionarioService.adicionarFuncionario(novoFuncionario);
      alert('Funcionário cadastrado com sucesso!');
      this.cadastroForm.reset();
    } else {
      this.cadastroForm.markAllAsTouched();
    }
  }
}
