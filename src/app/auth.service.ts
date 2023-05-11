import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient) { }

  regiser(userData:object):Observable<any>
  {
      return this._httpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup' , userData)
  }
}
