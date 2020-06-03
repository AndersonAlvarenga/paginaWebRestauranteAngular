import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {
  link = "http://192.168.0.105:8081/comanda";
  constructor(private http: HttpClient) { }

  async get(){
    return await this.http.get(this.link).toPromise();
  }
  async getById(id){
    return await this.http.get(this.link+"/"+id).toPromise();
  }
  async put(comanda){
    return await this.http.put(this.link+"/"+comanda.id,comanda).toPromise();
  }
}
