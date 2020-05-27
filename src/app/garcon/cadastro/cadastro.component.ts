import { Component, OnInit } from '@angular/core';
import { Garcon } from '../interface/inteface-garcon';
import { GarconService } from '../service-garcon/garcon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  garconForm: Garcon = {} as Garcon;
  garcon: Garcon;
  aux: any;
  verifador = true;
valorId: number;
  constructor(private garconService: GarconService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (parans: any) => {
        const id = parans['id'];
        this.carregarItem(id);
        this.valorId=id;
      }
    )
  }
  onSubmit(form) {
    if (this.verifador == true) {
      this.garconService.insertGarcon(form.value);
      alert("Garçon Cadastrado");
    }else{
      this.garcon=form.value;
      this.garcon.id=this.valorId;
      this.garconService.editar(form.value);
      alert("Cadastro Editado");
    }

  }
  async carregarItem(id) {
    if (id != null) {
      this.aux = await this.garconService.getGarconById(id);
      this.garcon = this.aux;
      this.garconForm = this.garcon;
      this.verifador=false;
    }

  }
  cancelar() {
    alert("Cadastro cancelado");
  }
}
