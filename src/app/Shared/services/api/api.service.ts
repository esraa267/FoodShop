import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import product from '../../models/product';

@Injectable({
  providedIn:'root'
})
export class APIService {

  constructor(private http: HttpClient) { }


  getAll  () {
    return this.http.get(environment.ProductURL)
  }
  getById(id: number) {
    return this.http.get(`${environment.ProductURL}/${id}`);
  }
  addProduct(data: product) {
    return this.http.post(environment.ProductURL+'/Add', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }), withCredentials: true,
    })
  }
  deleteProduct(id: number) {
    return this.http.delete(`${environment.ProductURL}/${id}`)
  }
  updateProduct(data: product) {
    return this.http.put(`${environment.ProductURL}/${data.id}`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }), withCredentials: true,
    })

  }
}
