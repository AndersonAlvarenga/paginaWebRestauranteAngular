import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../interface/pedidosInterface';
import { PedidosService } from '../service/pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos-finazalizados',
  templateUrl: './pedidos-finazalizados.component.html',
  styleUrls: ['./pedidos-finazalizados.component.css']
})
export class PedidosFinazalizadosComponent implements OnInit {
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
}