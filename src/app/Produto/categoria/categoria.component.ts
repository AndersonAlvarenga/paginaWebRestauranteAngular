import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../servicos/categoria.service';
import { Categoria } from '../interface/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor(private categoriaService: CategoriaService) { }
  listaCategoria: Categoria[];
  listaAux: any;

  async ngOnInit() {
    this.listaAux = await this.categoriaService.getCategoria();
    this.listaCategoria = this.listaAux;
    return this.listaCategoria;
  }
  deletar(id) {
    this.listaCategoria.forEach(categoria => {
      let aux = 0;
      if (categoria.id == id) {
        this.listaCategoria.splice(aux, 1);
        this.categoriaService.delete(id);
      }
      aux += 1;
    })
  }

}
