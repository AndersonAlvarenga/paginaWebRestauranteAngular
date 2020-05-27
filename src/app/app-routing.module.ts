import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { GarconComponent } from './garcon/garcons/garcon.component';
import { MesasComponent } from './mesas/mesas.component';
import { ProdutosComponent } from './Produto/produtos/produtos.component';
import { CadastroProdutoComponent } from './Produto/cadastro-produto/cadastro-produto.component';
import { PromocaoComponent } from './Produto/promocao/promocao.component';
import { CadastroComponent } from './garcon/cadastro/cadastro.component';
import { CategoriaComponent } from './Produto/categoria/categoria.component';
import { CadastroCategoriaComponent } from './Produto/cadastro-categoria/cadastro-categoria.component';


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
  { path: 'editarCategoria/:id', component: CadastroCategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
