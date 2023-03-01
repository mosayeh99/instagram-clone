import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  constructor(private FollowRes:HttpClient) { }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer 1|286ZJOvJJHvhNCfelaouXZ9LAz6OgO1gvzbPKUs9`
  });

  private BaseUrl = "http://localhost:8000/api/follow";

  
  MakeFollow( id:any) {
    return this.FollowRes.post(this.BaseUrl+'/followerStore/'+id, {headers: this.headers});
  }

  GetFollowersNumber( id:any){
    return this.FollowRes.get(this.BaseUrl+'/followerNumber/'+id,{headers: this.headers});
  }

  GetFollowingsNumber( id:any){
    return this.FollowRes.get(this.BaseUrl+'/followingNumber/'+id,{headers: this.headers});
  }

  MakeUnfollow( id:any) {
    return this.FollowRes.delete(this.BaseUrl+'/unfollow/'+id,{headers: this.headers});
  }

  GetAllFollowers(id:any){
    return this.FollowRes.get(this.BaseUrl+'/user/'+id+'/followers',{headers: this.headers});
  }

  GetAllFollowings(id:any){
    return this.FollowRes.get(this.BaseUrl+'/user/'+id+'/followings',{headers: this.headers});
  }

}
