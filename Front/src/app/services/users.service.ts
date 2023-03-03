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
    'Authorization': `Bearer 1|286ZJOvJJHvhNCfelaouXZ9LAz6OgO1gvzbPKUs9`
  });

  private BaseUrl = "http://localhost:8000/api/users";

  GetLoginUser() {
    return this.userRes.get(this.BaseUrl+'/login', {headers: this.headers});
  }

  // GetAllUserDetails(username:string) {
  //   return this.userRes.get(this.BaseUrl+'/'+username, {headers: this.headers});
  // }
}
