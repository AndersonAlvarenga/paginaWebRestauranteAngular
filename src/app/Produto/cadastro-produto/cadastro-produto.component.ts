import { Component, OnInit } from '@angular/core';
import { Produtos } from '../interface/produtos';
import { Categoria } from '../interface/categoria';
import { CategoriaService } from '../servicos/categoria.service';
import { ProdutosServiceService } from '../servicos/produtos-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  produto: Produtos;
  form: FormGroup;
  produtoAux: any;
  produtoForm: Produtos = {} as Produtos;
  resultPromo: string;
  categoria: Categoria[];
  respostaGetCategory: any;
  testePost = false;
  promocao = [{
    "texto": "EM PROMOÇÃO"
  },
  {
    "texto": "SEM PROMOÇÃO"
  }];
  constructor(
    private categoryService: CategoriaService,
    private produtoService: ProdutosServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.carregarCategoria();
    this.route.params.subscribe(
      (parans: any) => {
        const id = parans['id'];
        this.carregarItem(id);
      }
    )
  }
 onSubmit(form: any) {
    let resposta;
    if (this.testePost == false) {
      alert("Produto cadastrado");
      resposta = this.produtoService.insertProduto(form.value);
    } else {
      alert("Produto Alterado");
      resposta = this.produtoService.alterarProduto(this.produto);
      this.testePost = false;
    }
  }
  async carregarItem(id) {
    if(id!=null){
      this.produtoAux = await this.produtoService.getItemById(id);
      this.produto = this.produtoAux;
      this.produtoForm = this.produto;
      this.testePost = true;
      this.resultPromo=this.produtoAux.promocao;  
    }    
  }
  enviarValor() {
    this.resultPromo = (<HTMLInputElement>document.getElementById("teste")).value;
  }
  async carregarCategoria() {
    console.log("entro")
    this.respostaGetCategory = await this.categoryService.getCategoria();
    this.categoria = this.respostaGetCategory;
    return this.categoria;
  }

  cancelar() {
    alert("Cadastro Cancelado");
  }
}
