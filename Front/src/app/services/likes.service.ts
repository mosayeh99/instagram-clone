import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  constructor(private likesRes:HttpClient) { }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))}`
  });

  private BaseUrl = "http://localhost:8000/api/likes";
  AddPostLike(id:string) {
    return this.likesRes.post(this.BaseUrl+'/post/'+id, '',{headers: this.headers});
  }
  RemovePostLike(id:string) {
    return this.likesRes.delete(this.BaseUrl+'/post/'+id,{headers: this.headers});
  }
  GetAllUsersLikedPost(id:string) {
    return this.likesRes.get(this.BaseUrl+'/post/'+id,{headers: this.headers});
  }
  AddReelLike(id:string) {
    return this.likesRes.post(this.BaseUrl+'/reel/'+id, '',{headers: this.headers})
  }
  RemoveReelLike(id:string) {
    return this.likesRes.delete(this.BaseUrl+'/reel/'+id,{headers: this.headers});
  }
  GetAllUsersLikedReel(id:string) {
    return this.likesRes.get(this.BaseUrl+'/reel/'+id,{headers: this.headers});
  }
  AddCommentLike(id:string) {
    return this.likesRes.post(this.BaseUrl+'/comment/'+id, '',{headers: this.headers});
  }
  RemoveCommentLike(id:string) {
    return this.likesRes.delete(this.BaseUrl+'/comment/'+id,{headers: this.headers});
  }
}
