import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  constructor(private likesRes:HttpClient) { }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer 1|286ZJOvJJHvhNCfelaouXZ9LAz6OgO1gvzbPKUs9`
  });

  private BaseUrl = "http://localhost:8000/api/likes";
  AddPostLike(user:any, id:any) {
    return this.likesRes.post(this.BaseUrl+'/post/'+id, user,{headers: this.headers});
  }
  RemovePostLike(id:any) {
    return this.likesRes.delete(this.BaseUrl+'/post/'+id,{headers: this.headers});
  }
  GetAllUsersLikedPost(id:any) {
    return this.likesRes.get(this.BaseUrl+'/post/'+id,{headers: this.headers});
  }
  AddReelLike(user:any, id:any) {
    return this.likesRes.post(this.BaseUrl+'/reel/'+id, user,{headers: this.headers});
  }
  RemoveReelLike(id:any) {
    return this.likesRes.delete(this.BaseUrl+'/reel/'+id,{headers: this.headers});
  }
  GetAllUsersLikedReel(id:any) {
    return this.likesRes.get(this.BaseUrl+'/reel/'+id,{headers: this.headers});
  }
  AddCommentLike(user:any, id:any) {
    return this.likesRes.post(this.BaseUrl+'/comment/'+id, user,{headers: this.headers});
  }
  RemoveCommentLike(id:any) {
    return this.likesRes.delete(this.BaseUrl+'/comment/'+id,{headers: this.headers});
  }
}
