import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderInceptorService implements HttpInterceptor{

  constructor() { }
   header = new HttpHeaders({
    'Content-Type': 'application/json',
  })
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const API_Key='1234';
   return next.handle(req.clone({setHeaders:{API_Key}}))
  }
}
