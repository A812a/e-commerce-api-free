import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }


  getAllProduct() :Observable<any> {
    return this.httpClient.get(`https://fakestoreapi.com/products`)
  }

  getAllCategory() :Observable<any> {
    return this.httpClient.get(`https://fakestoreapi.com/products/categories`)
  }

  getCategory(category:any):Observable<any> {
    return this.httpClient.get(`https://fakestoreapi.com/products/category/${category}`)
  }

  getSingleProduct(id:any) {
    return this.httpClient.get(`https://fakestoreapi.com/products/${id}`)
  }
}
