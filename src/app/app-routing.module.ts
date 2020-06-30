import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { GarconComponent } from './garcon/garcons/garcon.component';
import { MesasComponent } from './mesas/mesa/mesas.component';
import { ProdutosComponent } from './Produto/produtos/produtos.component';
import { CadastroProdutoComponent } from './Produto/cadastro-produto/cadastro-produto.component';
import { PromocaoComponent } from './Produto/promocao/promocao.component';
import { CadastroComponent } from './garcon/cadastro/cadastro.component';
import { CategoriaComponent } from './Produto/categoria/categoria.component';
import { CadastroCategoriaComponent } from './Produto/cadastro-categoria/cadastro-categoria.component';
import { DetalheProdutoComponent } from './Produto/detalhe-produto/detalhe-produto.component';
import { CadastroMesaComponent } from './mesas/cadastro-mesa/cadastro-mesa.component';
import { AreaComponent } from './mesas/area/area.component';
import { CadastroAreaComponent } from './mesas/cadastro-area/cadastro-area.component';
import { ComandaComponent } from './comanda/comanda/comanda.component';
import { FecharContaComponent } from './comanda/fechar-conta/fechar-conta.component';
import { DetalheComandaComponent } from './comanda/detalhe-comanda/detalhe-comanda.component';
import { ComandaFechadaComponent } from './comanda/comanda-fechada/comanda-fechada.component';
import { PedidosPendentesComponent } from './Pedidos/pedidos-pendentes/pedidos-pendentes.component';
import { PedidosFinazalizadosComponent } from './Pedidos/pedidos-finazalizados/pedidos-finazalizados.component';
import { ComandaFechamentoComponent } from './comanda/comanda-fechamento/comanda-fechamento.component';


const routes: Routes = [
  { path: 'garcon', component: GarconComponent },
  { path: 'mesas', component: MesasComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'cadastroProduto', component: CadastroProdutoComponent },
  { path: 'editar/:id', component: CadastroProdutoComponent },
  { path: 'promocao', component: PromocaoComponent },
  { path: 'cadastroGarcon', component: CadastroComponent },
  { path: 'editarGarcon/:id', component: CadastroComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'cadastroCategoria', component: CadastroCategoriaComponent },
  { path: 'editarCategoria/:id', component: CadastroCategoriaComponent },
  { path: 'detalheProduto/:id', component: DetalheProdutoComponent },
  { path: 'mesas', component: MesasComponent },
  { path: 'cadastroMesa', component: CadastroMesaComponent },
  { path: 'editarMesa/:id', component: CadastroMesaComponent },
  { path: 'area', component: AreaComponent },
  { path: 'cadastroArea', component: CadastroAreaComponent },
  { path: 'editarArea/:id', component: CadastroAreaComponent },
  { path: 'listarComandas', component: ComandaComponent },
  { path: 'fechaConta/:id', component: FecharContaComponent },
  { path: 'detalheComanda/:id', component: DetalheComandaComponent },
  { path: 'comandaFechada', component: ComandaFechadaComponent },
  { path: 'pedidoPendente', component: PedidosPendentesComponent },
  { path: 'pedidoFinalizado', component: PedidosFinazalizadosComponent },
  { path: 'comandaFechamento', component: ComandaFechamentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
