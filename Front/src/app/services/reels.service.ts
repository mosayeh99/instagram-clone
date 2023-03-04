import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReelsService {

  constructor(private reelsRes:HttpClient) { }

  private headers = new HttpHeaders({
    "Accept": 'application/json',
    // "Authorization": `Bearer ${JSON.parse(sessionStorage.getItem('auth-user')).token}`
  });

  private BaseUrl = "http://localhost:8000/api/reels";
  GetAllReels() {
    return this.reelsRes.get(this.BaseUrl,{headers: this.headers});
  }
  GetAllUserReels(id: any){
    return this.reelsRes.get(this.BaseUrl+'/user/'+id,{headers: this.headers});
  }
  GetReelById(id: any){
    return this.reelsRes.get(this.BaseUrl+'/'+id,{headers: this.headers});
  }
  AddReel(reel: any){
    return this.reelsRes.post(this.BaseUrl,reel,{headers: this.headers});
  }
  UpdateReel(id:any,reel: any){
    return this.reelsRes.put(this.BaseUrl+'/'+id,reel,{headers: this.headers});
  }
  DeleteReel(id:any){
    return this.reelsRes.delete(this.BaseUrl+'/'+id,{headers: this.headers});
  }
}
