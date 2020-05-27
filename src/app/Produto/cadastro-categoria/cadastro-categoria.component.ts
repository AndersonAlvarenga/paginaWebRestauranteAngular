import { Component, OnInit } from '@angular/core';
import { Categoria } from '../interface/categoria';
import { CategoriaService } from '../servicos/categoria.service';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.css']
})
export class CadastroCategoriaComponent implements OnInit {
  categoriaForm: Categoria = {} as Categoria;
  categoria: Categoria;
  aux: any;
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
  }
  onSubmit(form) {
  this.categoriaService.insert(form.value);
  alert("Categoria Cadastrada");
  }
  cancelar() {
    alert("Cadastro Cancelado");
  }

}
