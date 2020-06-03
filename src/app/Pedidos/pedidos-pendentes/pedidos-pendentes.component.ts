import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../service/pedidos.service';
import { GarconService } from 'src/app/garcon/service-garcon/garcon.service';
import { MesaService } from 'src/app/mesas/service/mesa.service';
import { ProdutosServiceService } from 'src/app/Produto/servicos/produtos-service.service';
import { Produtos } from 'src/app/Produto/interface/produtos';
import { Mesa } from 'src/app/mesas/interface/interface-mesa';
import { Garcon } from 'src/app/garcon/interface/inteface-garcon';
import { Pedidos } from '../interface/pedidosInterface';
import { getLocaleDirection } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos-pendentes',
  templateUrl: './pedidos-pendentes.component.html',
  styleUrls: ['./pedidos-pendentes.component.css']
})
export class PedidosPendentesComponent implements OnInit {
  aux: any;
  auxPedido: any;
  listaPedido: Pedidos[];

  constructor(
    private pedidoService: PedidosService,
    private route: Router
  ) { }

  async ngOnInit() {
    this.auxPedido = await this.pedidoService.getPedidos();
    this.listaPedido = this.auxPedido;
    this.carregarPagina();
  }
  carregarPagina() {
    let carregarPagina = setInterval(async carregaPagina => {
      this.auxPedido = await this.pedidoService.getPedidos();
      this.listaPedido = this.auxPedido;
    }, 1000);
  }
  detalhar(id) {
    this.route.navigate(['detalheProduto', id]);
  }
  pedidoPronto(id) {
    this.listaPedido.forEach(pedido => {
      if (pedido.id == id) {
        pedido.status = "PRONTO";
        this.pedidoService.putPedido(pedido);
      }
    })
  }

}
