import { Component, OnInit } from '@angular/core';
import { Comanda } from '../interface/comanda';
import { ComandaService } from '../service/comanda.service';
import { GarconService } from 'src/app/garcon/service-garcon/garcon.service';
import { Garcon } from 'src/app/garcon/interface/inteface-garcon';
import { MesaService } from 'src/app/mesas/service/mesa.service';
import { Mesa } from 'src/app/mesas/interface/interface-mesa';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {
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
    this.carregaDados();
    console.log(this.listaComanda)
    console.log(this.listaMesa)
  }
  carregaDados(){
    let result = setTimeout(async carregaDado=>{
      this.listaAux = await this.comandaService.get();
      this.listaComanda = this.listaAux;
    },10000);
    
  }
  detalhe(id) {
    this.route.navigate(['detalheComanda', id]);
  }
  fechaConta(id) {
    this.listaComanda.forEach(comanda => {
      if (comanda.id == id) {
        if (comanda.status == "FECHAMENTO SOLICITADO") {
          this.route.navigate(['fechaConta', id]);
        } else {
          alert("So é possivel fechar conta após solicitação do cliente");
        }
      }
    })
  }

}
