import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { Observable , BehaviorSubject  } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData = new BehaviorSubject(null);
  constructor(private _httpClient:HttpClient , private _Router:Router) { }

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
     let decodedToken:any  = jwtDecode(encodedToken)

     this.userData.next(decodedToken);

  }

  logOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login'])


  }


}
