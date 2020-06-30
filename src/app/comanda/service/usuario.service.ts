import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  link= "http://192.168.0.105:8081/usuario"
  constructor(
    private http: HttpClient
  ) { }
  async getById(id) {
    console.log("Chamo get")
    return await this.http.get(this.link + "/" + id).toPromise();
  }
  async put(user: Usuario) {
    return await this.http.put(this.link + "/" + user.id, user).toPromise();
  }
}
