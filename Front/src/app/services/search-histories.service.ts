import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchHistoriesService {

  constructor(private searchRes:HttpClient) { }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer `
  });

  private BaseUrl = "http://localhost:8000/api/search";

  StoreSearchedUserByID(user:any, id:any){
    return this.searchRes.post(this.BaseUrl+'/store/'+id, user,{headers: this.headers});
  }

  GetUserByName(name:any){
    return this.searchRes.get(this.BaseUrl+'/'+name,{headers: this.headers});
  }

  DeleteHistory(id:any){
    return this.searchRes.delete(this.BaseUrl+'/deleteHistory/'+ id,{headers: this.headers});
  }
  
  GetUsersFromSearchHistory(id:any){
    return this.searchRes.get(this.BaseUrl+'/History/'+ id +'/users',{headers: this.headers});

  }



}
