import {Injectable, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private postsRes:HttpClient) { }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  private BaseUrl = "http://localhost:8000/api/posts";
  
  GetAllUserPosts(id: any){
    return this.postsRes.get(this.BaseUrl+'/user/'+id, {headers: this.headers});
  }
}
