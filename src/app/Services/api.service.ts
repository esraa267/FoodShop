import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import clients from '../Models/clients';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get('https://localhost:7013/api/clients')
  }
  getById(id: number) {
    return this.http.get(`https://localhost:7013/api/clients/${id}`);
  }
  addClient(data: clients) {
    return this.http.post('https://localhost:7013/api/clients', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }), withCredentials: true,
    })
  }
  deleteClient(id: number) {
    return this.http.delete(`https://localhost:7013/api/clients/${id}`)
  }
  updateClient(data: clients) {
    return this.http.put(`https://localhost:7013/api/clients`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }), withCredentials: true,
    })

  }
}
