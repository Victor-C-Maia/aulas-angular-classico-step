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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    UsersComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReversePipe,
    HttpClientModule,
    MatTableModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
