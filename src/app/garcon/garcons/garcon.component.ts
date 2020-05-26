import { Component, OnInit } from '@angular/core';
import { GarconService } from '../service-garcon/garcon.service';
import { Garcon } from '../interface/inteface-garcon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-garcon',
  templateUrl: './garcon.component.html',
  styleUrls: ['./garcon.component.css']
})
export class GarconComponent implements OnInit {
  listaGarcon: Garcon[];
  garcon: Garcon;
  listAux: any;
  constructor(
    private serviceGarcon: GarconService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  async ngOnInit() {
    this.listAux = await this.serviceGarcon.getGarcon();
    this.listaGarcon = this.listAux;
    return this.listaGarcon;
  }

  deletar(id) {
    let aux = 0;
    this.listaGarcon.forEach(garcon => {
      if (garcon.id == id) {
        this.listaGarcon.splice(aux, 1);
        this.serviceGarcon.delete(id);
        alert("Garçon Deletado");
      }
      aux += 1;
    })
  }
  editar(id) {
    this.router.navigate(['editarGarcon', id]);
  }

}
