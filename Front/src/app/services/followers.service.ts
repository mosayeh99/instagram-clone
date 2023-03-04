import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  constructor(private FollowRes:HttpClient) { }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))}`
  });

  private BaseUrl = "http://localhost:8000/api/follow";

  
  MakeFollow( id:any) {
    return this.FollowRes.post(this.BaseUrl+'/followerStore/'+id,'', {headers: this.headers});
  }

  GetFollowersNumber(){
    return this.FollowRes.get(this.BaseUrl+'/followerNumber',{headers: this.headers});
  }

  GetFollowingsNumber(){
    return this.FollowRes.get(this.BaseUrl+'/followingNumber',{headers: this.headers});
  }

  MakeUnfollow( id:any) {
    return this.FollowRes.delete(this.BaseUrl+'/unfollow/'+id,{headers: this.headers});
  }

  GetAllFollowers(){
    return this.FollowRes.get(this.BaseUrl+'/user'+'/followers',{headers: this.headers});
  }

  GetAllFollowings(){
    return this.FollowRes.get(this.BaseUrl+'/user'+'/followings',{headers: this.headers});
  }

}
