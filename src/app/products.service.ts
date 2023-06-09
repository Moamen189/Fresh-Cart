import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpclient:HttpClient) { }
  getProducts():Observable<any>
  {
    return this._httpclient.get('https://route-ecommerce.onrender.com/api/v1/auth/products');
  }

  getProductDetails(id:string):Observable<any>
  {
    return this._httpclient.get(`https://route-ecommerce.onrender.com/api/v1/auth/products/${id}`);
  }
  getCategories():Observable<any>{
    return this._httpclient.get('https://route-ecommerce.onrender.com/api/v1/auth/categories')
  }

  getBrands():Observable<any>{
    return this._httpclient.get('https://route-ecommerce.onrender.com/api/v1/auth/brands')
  }


}
