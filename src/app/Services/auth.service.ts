import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 


  }
Register(data:any){
 return this.http.post(environment.AuthURL+'/register',data)
}
Login(data:any){
  return this.http.post(environment.AuthURL+'/Login',data)

}
}
