import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  userData:BehaviorSubject<any> = new BehaviorSubject('');

  constructor(private http:HttpClient) {
    if(localStorage.getItem('userToken') != null) {
      this.getUserData()
    }
  }

  getUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'))
    let encoded = jwtDecode(encodedToken)
    console.log(encoded)
    this.userData.next(encoded)
  }

  register(form:any) :Observable<any> {
    return this.http.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,form)
  }

  login(form:any) :Observable<any> {
    return this.http.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,form)
  }
}
