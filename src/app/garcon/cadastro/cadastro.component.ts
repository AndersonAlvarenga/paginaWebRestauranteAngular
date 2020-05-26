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

  constructor(private garconService: GarconService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (parans: any) => {
        const id = parans['id'];
        this.carregarItem(id);
      }
    )
  }
  onSubmit(form) {
    this.garconService.insertGarcon(form.value);
    alert("Garçon Cadastrado");
  }
  async carregarItem(id) {
    if (id != null) {
      this.aux = await this.garconService.getGarconById(id);
      this.garcon = this.aux;
      this.garconForm = this.garcon;
    }

  }
  cancelar() {
    alert("Cadastro cancelado");
  }
}
