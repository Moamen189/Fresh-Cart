import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }


  addToCart(productId:string):Observable<any>
{
  return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/cart` , {productId:productId} )
}

GetLoggedUserCart():Observable<any>
{
  return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/cart` )
}

deleteToCart(productId:string):Observable<any>
{
  return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`  )
}

UpdateCart(productId:string , count:number):Observable<any>
{
  return this._HttpClient.put(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,{count:count}  )
}



}

