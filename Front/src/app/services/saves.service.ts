import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SavesService {

  constructor(private savesRes:HttpClient) { }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))}`
  });

  private BaseUrl = "http://localhost:8000/api/saves";

  AddPostToSaved(id:string) {
    return this.savesRes.post(this.BaseUrl+'/post/'+id, '',{headers: this.headers});
  }
  RemovePostFromSaved(id:string) {
    return this.savesRes.delete(this.BaseUrl+'/post/'+id+'/delete',{headers: this.headers});
  }
  GetAllUserSavedPosts(id:string) {
    return this.savesRes.get(this.BaseUrl+'/post/user/'+id,{headers: this.headers});
  }
  AddReelToSaved(id:string) {
    return this.savesRes.post(this.BaseUrl+'/reel/'+id, '',{headers: this.headers});
  }
  RemoveReelFromSaved(id:string) {
    return this.savesRes.delete(this.BaseUrl+'/reel/'+id+'/delete',{headers: this.headers});
  }
  GetAllUserSavedReels(id:string) {
    return this.savesRes.get(this.BaseUrl+'/reel/user/'+id,{headers: this.headers});
  }
}
