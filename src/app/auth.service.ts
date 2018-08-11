import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //private loggedInStatus = false;

  setLoggedIn(value: string){

    localStorage.setItem("isLoggedIn",value);
  }

  get isLoggedIn(){
    return localStorage.getItem("isLoggedIn");
  }

  getUserDetails(email, password){

    return this.http.post('https://reqres.in/api/login',{
      email,
      password
    });

  }
}
