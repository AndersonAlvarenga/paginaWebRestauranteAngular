import { Component, OnInit } from '@angular/core';
import { Comanda } from '../interface/comanda';
import { Mesa } from 'src/app/mesas/interface/interface-mesa';
import { Garcon } from 'src/app/garcon/interface/inteface-garcon';
import { ComandaService } from '../service/comanda.service';
import { GarconService } from 'src/app/garcon/service-garcon/garcon.service';
import { MesaService } from 'src/app/mesas/service/mesa.service';
import { ActivatedRoute } from '@angular/router';
import { ProdutosServiceService } from 'src/app/Produto/servicos/produtos-service.service';
import { Produtos } from 'src/app/Produto/interface/produtos';

@Component({
  selector: 'app-fechar-conta',
  templateUrl: './fechar-conta.component.html',
  styleUrls: ['./fechar-conta.component.css']
})
export class FecharContaComponent implements OnInit {
  id: number;
  aux: any;
  comanda: Comanda;
  garcon: Garcon;
  mesa: Mesa;
  listaProduto: Produtos[];
  imagem = "https://i.pinimg.com/236x/66/f9/70/66f970bda935c2a7ee8d87234c40bbd7--cool-restaurant-restaurant-logos.jpg"
  constructor(
    private router: ActivatedRoute,
    private comandaService: ComandaService,
    private mesaService: MesaService,
    private garconService: GarconService,
    private produtoService: ProdutosServiceService
  ) { }

  async ngOnInit() {
    this.router.params.subscribe(
      (parans: any) => {
        this.id = parans['id'];
      }
    );
  
    this.aux = await this.comandaService.getById(this.id)
    this.comanda = this.aux;
    this.comanda.status="FECHADA";
    this.comandaService.put(this.comanda);
    this.aux = await this.garconService.getGarconById(this.comanda.id_garcon);
    this.garcon = this.aux;
    this.aux = await this.mesaService.getMesaById(this.comanda.id_mesa);
    this.mesa = this.aux;
    this.aux = await this.produtoService.carregarItem();
    this.listaProduto = this.aux;

  }

}