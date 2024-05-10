import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { ListaProdutosComponent } from './components/produtos/lista-produtos/lista-produtos.component';
import { CadastrarProdutosComponent } from './components/produtos/cadastrar-produtos/cadastrar-produtos.component';
import { HomeComponent } from './components/home/home.component';

// PIPES: https://angular.io/guide/pipes

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListaProdutosComponent,
    CadastrarProdutosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
],


  //providers: [],
  bootstrap: [AppComponent] // AppComponent ele é chamado  do bootstrap


})
export class AppModule { }
