import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CadastroFuncionarioComponent } from './components/cadastro-funcionario/cadastro-funcionario.component';
import { ListaFuncionariosComponent } from './components/lista-funcionarios/lista-funcionarios.component';
import { FuncionarioDetalhesComponent } from './components/funcionario-detalhes/funcionario-detalhes.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CadastroFuncionarioComponent,
    ListaFuncionariosComponent,
    FuncionarioDetalhesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
