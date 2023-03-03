import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchHistoriesService {

  constructor(private searchRes:HttpClient) { }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-user')).token}`
  });

  private BaseUrl = "http://localhost:8000/api/search";

  StoreSearchedUserByID( id:any){
    return this.searchRes.post(this.BaseUrl+'/store/'+id, {headers: this.headers});
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

  DeleteAllHistory(){
    return this.searchRes.delete(this.BaseUrl+'/deleteAllHistory',{headers: this.headers});

  }



}
