import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MesasComponent } from './mesas/mesas.component';
import { NavComponent } from './nav/nav.component';
import { ProdutosComponent } from './Produto/produtos/produtos.component';
import { GarconComponent } from './garcon/garcons/garcon.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastroProdutoComponent } from './Produto/cadastro-produto/cadastro-produto.component';
import { FormsModule } from '@angular/forms';
import { PromocaoComponent } from './Produto/promocao/promocao.component';
import { CadastroComponent } from './garcon/cadastro/cadastro.component';
import { CategoriaComponent } from './Produto/categoria/categoria.component';
import { CadastroCategoriaComponent } from './Produto/cadastro-categoria/cadastro-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    MesasComponent,
    NavComponent,
    ProdutosComponent,
    GarconComponent,
    CadastroProdutoComponent,
    PromocaoComponent,
    CadastroComponent,
    CategoriaComponent,
    CadastroCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
