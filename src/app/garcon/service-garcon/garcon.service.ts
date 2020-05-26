import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Garcon } from '../interface/inteface-garcon';

@Injectable({
  providedIn: 'root'
})
export class GarconService {
  link = "http://localhost:3000/garcon";

  constructor(private http: HttpClient) { }

  async getGarcon() {
    return await this.http.get(this.link).toPromise();
  }
  async getGarconById(id) {
    return await this.http.get(this.link + "/" + id).toPromise();
  }
  async insertGarcon(garcon) {
    return await this.http.post(this.link, garcon).toPromise();
  }
  async delete(id: number) {
    return this.http.delete(this.link + "/" + id).toPromise();
  }
}
