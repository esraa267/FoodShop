import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import product from '../Models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn:'root'
})
export class APIService {

  constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get(environment.URL)
  }
  getById(id: number) {
    return this.http.get(`${environment.URL}/${id}`);
  }
  addProduct(data: product) {
    return this.http.post(environment.URL+'/Add', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }), withCredentials: true,
    })
  }
  deleteProduct(id: number) {
    return this.http.delete(`${environment.URL}/${id}`)
  }
  updateProduct(data: product) {
    return this.http.put(`${environment.URL}/${data.id}`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }), withCredentials: true,
    })

  }
}
