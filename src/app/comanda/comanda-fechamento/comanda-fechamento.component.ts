import { Component, OnInit } from '@angular/core';
import { Comanda } from '../interface/comanda';
import { Mesa } from 'src/app/mesas/interface/interface-mesa';
import { Garcon } from 'src/app/garcon/interface/inteface-garcon';
import { ComandaService } from '../service/comanda.service';
import { GarconService } from 'src/app/garcon/service-garcon/garcon.service';
import { MesaService } from 'src/app/mesas/service/mesa.service';
import { Router } from '@angular/router';
import { Usuario } from '../interface/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-comanda-fechamento',
  templateUrl: './comanda-fechamento.component.html',
  styleUrls: ['./comanda-fechamento.component.css']
})
export class ComandaFechamentoComponent implements OnInit {
  listaComanda: Comanda[];
  listaMesa: Mesa[];
  listaGarcon: Garcon[];
  listaAux: any;
  user: Usuario;
  mesa: Mesa
  constructor(
    private comandaService: ComandaService,
    private garconService: GarconService,
    private mesaService: MesaService,
    private route: Router,
    private userService: UsuarioService
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
  carregaDados() {
    let result = setTimeout(async carregaDado => {
      this.listaAux = await this.comandaService.get();
      this.listaComanda = this.listaAux;
    }, 10000);

  }
  detalhe(id) {
    this.route.navigate(['detalheComanda', id]);
  }
  async pagamentoRecebido(id) {

    this.listaComanda.forEach(async comanda => {
      if (comanda.id == id) {
        let aux: any;
        aux = await this.userService.getById(comanda.id_cliente);
        this.user = aux;
        console.log("User")
        console.log(this.user)
        this.user.id_comanda = null;
        this.listaAux = await this.mesaService.getMesaById(this.user.id_mesa)
        this.mesa = this.listaAux;
        console.log("Mesa")
        console.log(this.mesa)
        this.mesa.status = "DISPONIVEL";
        this.user.id_mesa = null;
        this.listaAux = await this.mesaService.alter(this.mesa)
        this.user.id_mesa = null;
        console.log(comanda)
        comanda.status = "FECHADA";
        let resp = await this.comandaService.put(comanda);
        resp = await this.userService.put(this.user);

      }
    })

  }

}
