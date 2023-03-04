import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://127.0.0.1:8000/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getAuthStatus() {

    if(window.sessionStorage.getItem("auth-token") == null){
      return false
    }
    else{
      return true
    }
  }

  constructor(private AuthRes: HttpClient) { }


  login(email: string, password: string): Observable<any> {
    return this.AuthRes.post(
      `${AUTH_API}/login`,
    {
      email,
      password
    },
      httpOptions
    );
  }

  register(email: string, name:string ,username: string, password: string,): Observable<any> {
    return this.AuthRes.post(
      `${AUTH_API}/register`,
    {
      email,
      name,
      username,
      password,

    },
      httpOptions
    );
  }
}
