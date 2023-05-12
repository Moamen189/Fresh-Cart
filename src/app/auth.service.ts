import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

import { Observable, observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData = null;
  constructor(private _httpClient:HttpClient) { }

  register(userData:object):Observable<any>
  {
      return this._httpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup' , userData)
  }

  Login(userData:object):Observable<any>
  {
      return this._httpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin' , userData)
  }

  decodedUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'))
     let decodedToken  = jwtDecode(encodedToken)

  }


}
