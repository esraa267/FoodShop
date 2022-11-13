import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import clients from '../Models/clients';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get('https://localhost:7013/api/clients')
  }
  getById(id: number) {
    return this.http.get(`${environment.URL}/${id}`);
  }
  addClient(data: clients) {
    return this.http.post(environment.URL, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }), withCredentials: true,
    })
  }
  deleteClient(id: number) {
    return this.http.delete(`${environment.URL}/${id}`)
  }
  updateClient(data: clients) {
    return this.http.put(environment.URL, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }), withCredentials: true,
    })

  }
}
