import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  link = "http://192.168.0.105:8081/pedido";

  constructor(private http: HttpClient) { }

  async getPedidos() {
    return await this.http.get(this.link).toPromise();
  }
  async putPedido(pedido) {
    this.http.put(this.link + "/" + pedido.id, pedido).toPromise();
  }
}
