import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MesasComponent } from './mesas/mesa/mesas.component';
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
import { DetalheProdutoComponent } from './Produto/detalhe-produto/detalhe-produto.component';
import { AreaComponent } from './mesas/area/area.component';
import { CadastroAreaComponent } from './mesas/cadastro-area/cadastro-area.component';
import { CadastroMesaComponent } from './mesas/cadastro-mesa/cadastro-mesa.component';
import { DetalheMesaComponent } from './mesas/detalhe-mesa/detalhe-mesa.component';
import { ComandaComponent } from './comanda/comanda/comanda.component';
import { FecharContaComponent } from './comanda/fechar-conta/fechar-conta.component';
import { DetalheComandaComponent } from './comanda/detalhe-comanda/detalhe-comanda.component';
import { ComandaFechadaComponent } from './comanda/comanda-fechada/comanda-fechada.component';
import { PedidosPendentesComponent } from './Pedidos/pedidos-pendentes/pedidos-pendentes.component';
import { PedidosFinazalizadosComponent } from './Pedidos/pedidos-finazalizados/pedidos-finazalizados.component';
import { ComandaFechamentoComponent } from './comanda/comanda-fechamento/comanda-fechamento.component';

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
    CadastroCategoriaComponent,
    DetalheProdutoComponent,
    AreaComponent,
    CadastroAreaComponent,
    CadastroMesaComponent,
    DetalheMesaComponent,
    ComandaComponent,
    FecharContaComponent,
    DetalheComandaComponent,
    ComandaFechadaComponent,
    PedidosPendentesComponent,
    PedidosFinazalizadosComponent,
    ComandaFechamentoComponent
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
