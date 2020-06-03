import { Component, OnInit } from '@angular/core';
import { MesaService } from '../service/mesa.service';
import { AreaService } from '../service/area.service';
import { GarconService } from 'src/app/garcon/service-garcon/garcon.service';
import { Mesa } from '../interface/interface-mesa';
import { Area } from '../interface/interface-area';
import { Garcon } from 'src/app/garcon/interface/inteface-garcon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {
aux:any;
listaMesa:Mesa[];
listaArea:Area[];
listaGarcon:Garcon[];
  constructor(
    private mesaService: MesaService,
    private areaService:AreaService,
    private garconService:GarconService,
    private route:Router
    ) { }

  async ngOnInit(){
    this.aux=await this.mesaService.getMesa();
    this.listaMesa=this.aux;
    this.aux=await this.areaService.getArea();
    this.listaArea=this.aux;
    this.aux=await this.garconService.getGarcon();
    this.listaGarcon=this.aux;
    console.log(this.listaMesa)
  }
  detalhe(id){
    this.route.navigate(["detalhe",id])
  }

}
