import { Component, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from '../../services/message-service.service';

interface Produto {
  nome: string;
  preco: number;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  title = "Hello, app-aula-1!";
  valor = 10.50;
  currentDay = new Date();
  // ------------------------------------------------------------------------------------------------------------
  isLogged = false;
  cadastrar() {
    console.log('cadastrar')
    this.isLogged = !this.isLogged;
    this.title = "Hello, app-aula-2!";
  }
  // ------------------------------------------------------------------------------------------------------------
  @ViewChild('num1') num1!: ElementRef;
  @ViewChild('num2') num2!: ElementRef;

  soma: number | null = null;
  somar(){
    this.soma = Number(this.num1.nativeElement.value) + Number(this.num2.nativeElement.value);
  }

  subtracao: number | null = null;
  subtrair(){ 
    this.subtracao = Number(this.num1.nativeElement.value) - Number(this.num2.nativeElement.value);
  }

  multiplicacao: number | null = null;
  multiplicar(){
    this.multiplicacao = Number(this.num1.nativeElement.value) * Number(this.num2.nativeElement.value);
  }

  divisao: number | null = null;
  dividir(){
    this.divisao = Number(this.num1.nativeElement.value) / Number(this.num2.nativeElement.value);
  }
  // --------------------------------------------------------------------------------------------------------------
  frutas = ['banana', 'maçã', 'laranja', 'pera', 'manga'];
  produtos : Produto[] = [
    {nome: 'Laptop', preco: 4500},
    {nome: 'Smartphone', preco: 1700}
  ]
  // --------------------------------------------------------------------------------------------------------------
  DeusCriouOHomemOHomemCriouNeroENeroCriouADancaDaManivela = false;
  dancaDaManivela() {
    this.DeusCriouOHomemOHomemCriouNeroENeroCriouADancaDaManivela = true;
    // this.aDancaDaManivelaElaTopou = true;
  }
  aDancaDaManivelaElaTopou = false;
  perguntarPraElaMeuAmor() {
    this.aDancaDaManivelaElaTopou = true;
  }
  temperaturas = ["quente", "frio"]
  indiceTemperatura = 0;
  desceuDevagarinho: string | null = null;
  descerDevagarinho() {
    // this.desceuDevagarinho = true;
    this.desceuDevagarinho = this.temperaturas[this.indiceTemperatura];
    this.indiceTemperatura = (this.indiceTemperatura + 1) % this.temperaturas.length;
  }
  // --------------------------------------------------------------------------------------------------------------
  statusAcesso = ["permitido", "negado"];
  indiceStatusAcesso = 0;
  statusAcessoAtual: string | null = null;
  tentarAcesso() {
    this.statusAcessoAtual = this.statusAcesso[this.indiceStatusAcesso];
    this.indiceStatusAcesso = (this.indiceStatusAcesso + 1) % this.statusAcesso.length;
  }
  // --------------------------------------------------------------------------------------------------------------
  testePipeReverse = "Angular"
  // --------------------------------------------------------------------------------------------------------------
  constructor(public messageService: MessageService) {}
  sendMessage() {
    this.messageService.add('Nova mensagem em ' + new Date());
  }
  // --------------------------------------------------------------------------------------------------------------
  adicionarAoCarrinho(mensagem: string) {
    console.log(mensagem);
    alert(mensagem);
  }
  // --------------------------------------------------------------------------------------------------------------
  usuario = { nome: 'Joana', idade: 30 };

  receberApresentacao(mensagem: string) {
    console.log(mensagem);
    alert(mensagem);
  }
}

