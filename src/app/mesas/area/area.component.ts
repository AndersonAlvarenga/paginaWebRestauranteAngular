import { Component, OnInit } from '@angular/core';
import { AreaService } from '../service/area.service';
import { Area } from '../interface/interface-area';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  listaArea: Area[];
  areaAux: any;

  constructor(private areaService: AreaService, private route: Router) { }

  async ngOnInit() {
    this.areaAux = await this.areaService.getArea();
    this.listaArea = this.areaAux;
  }
  deletar(id) {
    let cont = 0;
    this.listaArea.forEach(area => {
      if (area.id == id) {
        this.listaArea.splice(cont, 1);
        this.areaService.deleteArea(area.id);
      }
      cont += 1;
    })
  }
  editar(id) {
    this.route.navigate(['editarArea', id]);
  }

}
