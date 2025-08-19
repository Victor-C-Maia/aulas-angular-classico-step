import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProdutoDetalheComponent } from './components/produto-detalhe/produto-detalhe.component';
import { PaginanaoencontradaComponent } from './components/paginanaoencontrada/paginanaoencontrada.component';
import { LoginComponent } from './components/login/login.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { UsuarioDetalhesComponent } from './components/usuario-detalhes/usuario-detalhes.component';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },          
  // { path: 'produto/:id', component: ProdutoDetalheComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'cadastrar', component: LoginComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'usuario/:id', component: UsuarioDetalhesComponent },
  { path: '**', component: PaginanaoencontradaComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
