import { Component, OnInit } from '@angular/core';
import { Mesa } from '../interface/interface-mesa';
import { Area } from '../interface/interface-area';
import { AreaService } from '../service/area.service';
import { Garcon } from 'src/app/garcon/interface/inteface-garcon';
import { GarconService } from 'src/app/garcon/service-garcon/garcon.service';
import { MesaService } from '../service/mesa.service';

@Component({
  selector: 'app-cadastro-mesa',
  templateUrl: './cadastro-mesa.component.html',
  styleUrls: ['./cadastro-mesa.component.css']
})
export class CadastroMesaComponent implements OnInit {
  mesaForm: Mesa = {} as Mesa;
  listaArea: Area[];
  listaGarcon: Garcon[];
  listaMesa:Mesa;
  aux: any;
  constructor(
    private areaService: AreaService, 
    private garconService: GarconService,
    private mesaService: MesaService
    ) { }

  async ngOnInit() {
    this.aux = await this.areaService.getArea();
    this.listaArea = this.aux;
    this.aux = await this.garconService.getGarcon();
    this.listaGarcon = await this.aux;
  }
  onSubmit(form) {
    this.aux=form.value;
    this.listaMesa=this.aux;
    this.mesaService.insert(this.listaMesa);
  }
  cancelar() {

  }

}
