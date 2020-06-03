import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  link = "http://192.168.0.105:8081/mesa";

  constructor(private http: HttpClient) { }

  async getMesa() {
    return await this.http.get(this.link).toPromise();
  }
  async getMesaById(id) {
    return await this.http.get(this.link + "/" + id).toPromise()
  }
  async delete(id) {
    return await this.http.delete(this.link + "/" + id).toPromise();
  }
  async insert(mesa) {
    return await this.http.post(this.link, mesa).toPromise();
  }
  async alter(mesa){
    return await this.http.put(this.link+"/"+mesa.id,mesa).toPromise();
  }
}
