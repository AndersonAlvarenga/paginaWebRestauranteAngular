import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  link = "http://localhost:3000/categorias";
  constructor(private http: HttpClient) { }
  async getCategoria() {
    return await this.http.get(this.link).toPromise();
  }
  async getCategoriaByID(id){
    return await this.http.get(this.link+"/"+id).toPromise();
  }
  async delete(id){
    return await this.http.delete(this.link,id).toPromise();
    
  }
  async insert(categoria){
    return await this.http.post(this.link,categoria).toPromise();
  }
}
