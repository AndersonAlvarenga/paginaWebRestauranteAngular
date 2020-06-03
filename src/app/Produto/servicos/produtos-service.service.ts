import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produtos } from '../interface/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosServiceService {
  private link = 'http://192.168.0.105:8081/produtos';
  
  constructor(private http: HttpClient) { }
  async carregarItem() {
    return await this.http.get(this.link).toPromise();
  }
  async deletar(id: number) {
    return await this.http.delete(this.link + "/" + id).toPromise();
  }
  async insertProduto(produto: Produtos) {
    return await this.http.post(this.link, produto).toPromise();
  }
  async getItemById(id) {
    return await this.http.get(this.link + "/" + id).toPromise();
  }
  async alterarProduto(produto: Produtos) {
    return await this.http.put(this.link+"/"+produto.id,produto).toPromise();
  }
}
