import { Component, OnInit } from '@angular/core';
import { ProdutosServiceService } from '../servicos/produtos-service.service';
import { Produtos } from '../interface/produtos';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private produtosServise: ProdutosServiceService,
    private router:Router,
    private route:ActivatedRoute) { }
  produtos: Produtos;
  listaProdutos: Produtos[];
  aux: any;
  promocao: [
    {
      "string": "Em Promoção"
    },
    {
      "string": "Preço normal"
    }
  ];

  async ngOnInit() {
    this.aux = await this.produtosServise.carregarItem();
    this.listaProdutos = this.aux;
  }
  editar(id) {
  this.router.navigate(['editar',id]);
  }
  detalhar(id){
    this.router.navigate(['detalheProduto',id]);
  }
  deletar(id: number) {
    console.log(this.listaProdutos);
    let aux = 0;
    this.listaProdutos.forEach(produtos => {
      if (produtos.id == id) {
        this.listaProdutos.splice(aux,1);
        console.log("produto deletado")
        console.log(this.listaProdutos)
      }
      aux+=1;
    }
    )
    this.produtosServise.deletar(id);
  }
}
