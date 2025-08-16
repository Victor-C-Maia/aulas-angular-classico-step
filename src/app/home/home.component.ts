import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = "Hello, app-aula-1!"
  valor = 10.50
  currentDay = new Date();
  isLogged = true;
  cadastrar() {
    console.log('cadastrar')
    this.isLogged = !this.isLogged
    this.title = "Hello, app-aula-2!"
  }
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
}
