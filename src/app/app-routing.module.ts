import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFuncionarioComponent } from './components/cadastro-funcionario/cadastro-funcionario.component';
import { ListaFuncionariosComponent } from './components/lista-funcionarios/lista-funcionarios.component';
import { FuncionarioDetalhesComponent } from './components/funcionario-detalhes/funcionario-detalhes.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista-funcionarios', pathMatch: 'full' },
  { path: 'cadastro-funcionario', component: CadastroFuncionarioComponent },
  { path: 'lista-funcionarios', component: ListaFuncionariosComponent },
  { path: 'funcionario/:id', component: FuncionarioDetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
