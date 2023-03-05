import {Injectable, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  loginUser: any;
  constructor(private userRes:HttpClient) { }

  private headers = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))}`
  });

  private BaseUrl = "http://localhost:8000/api/users";

  GetLoginUser() {
    return this.userRes.get(this.BaseUrl+'/get/info', {headers: this.headers});
  }

  GetAllUserDetails(username:string) {
    return this.userRes.get(this.BaseUrl+'/'+username, {headers: this.headers});
  }

  GetUserById(id:any) {
    return this.userRes.get(this.BaseUrl+'users/user/'+id, {headers: this.headers});
  }
}
