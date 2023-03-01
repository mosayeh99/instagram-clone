import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SavesService {

  constructor(private savesRes:HttpClient) { }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer 1|286ZJOvJJHvhNCfelaouXZ9LAz6OgO1gvzbPKUs9`
  });

  private BaseUrl = "http://localhost:8000/api/saves";

  AddPostToSaved(user:any, id:any) {
    return this.savesRes.post(this.BaseUrl+'/post/'+id, user,{headers: this.headers});
  }
  RemovePostFromSaved(id:any) {
    return this.savesRes.delete(this.BaseUrl+'/post/'+id,{headers: this.headers});
  }
  GetAllUserSavedPosts(id:any) {
    return this.savesRes.get(this.BaseUrl+'/post/user/'+id,{headers: this.headers});
  }
  AddReelToSaved(user:any, id:any) {
    return this.savesRes.post(this.BaseUrl+'/reel/'+id, user,{headers: this.headers});
  }
  RemoveReelFromSaved(id:any) {
    return this.savesRes.delete(this.BaseUrl+'/reel/'+id,{headers: this.headers});
  }
  GetAllUserSavedReels(id:any) {
    return this.savesRes.get(this.BaseUrl+'/reel/user/'+id,{headers: this.headers});
  }
}
