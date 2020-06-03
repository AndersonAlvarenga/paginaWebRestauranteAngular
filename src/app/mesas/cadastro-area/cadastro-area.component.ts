import { Component, OnInit } from '@angular/core';
import { Area } from '../interface/interface-area';
import { AreaService } from '../service/area.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-area',
  templateUrl: './cadastro-area.component.html',
  styleUrls: ['./cadastro-area.component.css']
})
export class CadastroAreaComponent implements OnInit {
  areaForm: Area = {} as Area;
  area: Area;
  areaAux: any;
  verificador: false;
  idAlter:number;
  constructor(private areaService: AreaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (parans: any) => {
        const id = parans['id'];
        if (id != null) {
          this.carregarItem(id);
        }
      }
    )
  }

  onSubmit(form) {
    if (this.verificador == false) {
      alert("Registro Cadastrado");
      this.areaService.insertArea(form.value);
    } else {
      console.log(form.value)
      this.areaService.alter(form.value,this.idAlter);
      alert("Registro Editado");
    }

  }
  async carregarItem(id) {
    this.areaAux = await this.areaService.getAreaById(id);
    this.area = this.areaAux;
    this.area.id = id;
    this.idAlter=id;
    this.areaForm = this.area;
    return this.areaForm;
  }
  cancelar() {
    alert("Cadastro Cancelado");
  }

}
