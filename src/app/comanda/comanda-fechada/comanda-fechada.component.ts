import { Component, OnInit } from '@angular/core';
import { Comanda } from '../interface/comanda';
import { Mesa } from 'src/app/mesas/interface/interface-mesa';
import { Garcon } from 'src/app/garcon/interface/inteface-garcon';
import { ComandaService } from '../service/comanda.service';
import { GarconService } from 'src/app/garcon/service-garcon/garcon.service';
import { MesaService } from 'src/app/mesas/service/mesa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comanda-fechada',
  templateUrl: './comanda-fechada.component.html',
  styleUrls: ['./comanda-fechada.component.css']
})
export class ComandaFechadaComponent implements OnInit {
  listaComanda: Comanda[];
  listaMesa: Mesa[];
  listaGarcon: Garcon[];
  listaAux: any;
  constructor(
    private comandaService: ComandaService,
    private garconService: GarconService,
    private mesaService: MesaService,
    private route: Router,

  ) { }

  async ngOnInit() {
    this.listaAux = await this.comandaService.get();
    this.listaComanda = this.listaAux;
    this.listaAux = await this.garconService.getGarcon();
    this.listaGarcon = this.listaAux;
    this.listaAux = await this.mesaService.getMesa();
    this.listaMesa = this.listaAux;
  }
  detalhe(id) {
    this.route.navigate(['detalheComanda', id]);
  }



}
