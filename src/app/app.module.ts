import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from "./pipes/reverse-pipe";
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { MatTableModule } from '@angular/material/table';
import { PaiComponent } from './components/pai/pai.component';
import { FilhoComponent } from './components/filho/filho.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProdutoDetalheComponent } from './components/produto-detalhe/produto-detalhe.component';
import { PaginanaoencontradaComponent } from './components/paginanaoencontrada/paginanaoencontrada.component';
import { LoginComponent } from './components/login/login.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { UsuarioDetalhesComponent } from './components/usuario-detalhes/usuario-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    UsersComponent,
    TableComponent,
    PaiComponent,
    FilhoComponent,
    ProdutoComponent,
    PerfilComponent,
    PaginanaoencontradaComponent,
    LoginComponent,
    ListaUsuariosComponent,
    UsuarioDetalhesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReversePipe,
    ProdutoDetalheComponent,
    HttpClientModule,
    MatTableModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
