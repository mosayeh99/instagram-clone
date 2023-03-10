import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private commentRes:HttpClient) { }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))}`
  });

  private BaseUrl = "http://localhost:8000/api/comments";
  GetAllPostComments(id:any) {
    return this.commentRes.get(this.BaseUrl+'/post/'+id,{headers: this.headers});
  }
  AddPostComment(comment:any, id:any) {
    return this.commentRes.post(this.BaseUrl+'/post/'+id,comment,{headers: this.headers});
  }
  GetAllReelComments(id:any) {
    return this.commentRes.get(this.BaseUrl+'/reel/'+id,{headers: this.headers});
  }
  AddReelComment(comment:any, id:any) {
    return this.commentRes.post(this.BaseUrl+'/reel/'+id,comment,{headers: this.headers});
  }
  GetPostCommentsReplies(id:any) {
    return this.commentRes.get(this.BaseUrl+'/post/replies/'+id,{headers: this.headers});
  }
  GetReelCommentsReplies(id:any) {
    return this.commentRes.get(this.BaseUrl+'/reel/replies/'+id,{headers: this.headers});
  }
}
