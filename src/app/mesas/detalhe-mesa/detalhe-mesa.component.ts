import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-mesa',
  templateUrl: './detalhe-mesa.component.html',
  styleUrls: ['./detalhe-mesa.component.css']
})
export class DetalheMesaComponent implements OnInit {
  route: ActivatedRoute;
  id: number;
  constructor() { }

  async ngOnInit() {
    this.route.params.subscribe(
      (parans: any) => {
        this.id = parans['id'];
      }
    )
    
  }
}


