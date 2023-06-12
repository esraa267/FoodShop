import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import Order from '../../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  addOrder(data: Order) {
    return this.http.post(environment.OrderURL, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }), withCredentials: true,
    })
  }
}
