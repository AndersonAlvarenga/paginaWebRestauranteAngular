import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosServiceService } from '../servicos/produtos-service.service';
import { Produtos } from '../interface/produtos';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {
  produto: Produtos;
  aux: any;
  id:number;
  constructor(private route: ActivatedRoute, private produtoService: ProdutosServiceService) { }

  async ngOnInit(){
    this.route.params.subscribe(
      (parans: any) => {
        this.id = parans['id'];
      }
    )
    this.aux = await this.produtoService.getItemById(this.id);
        this.produto=this.aux;
        console.log(this.produto);
  }

}
