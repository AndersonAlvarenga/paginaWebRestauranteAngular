import { Component, OnInit } from '@angular/core';
import { Produtos } from '../interface/produtos';
import { ProdutosServiceService } from '../servicos/produtos-service.service';

@Component({
  selector: 'app-promocao',
  templateUrl: './promocao.component.html',
  styleUrls: ['./promocao.component.css']
})
export class PromocaoComponent implements OnInit {
  listaProduto: Produtos[];
  produtoAux: any;
  constructor(private produtoService: ProdutosServiceService) { }

  async ngOnInit() {
    this.produtoAux = await this.produtoService.carregarItem();
    this.listaProduto=this.produtoAux;
    console.log(this.listaProduto)
  }

}
