import {Injectable, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private postsRes:HttpClient) { }

  private headers = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': `Bearer 1|286ZJOvJJHvhNCfelaouXZ9LAz6OgO1gvzbPKUs9`
  });

  private BaseUrl = "http://localhost:8000/api/posts";
  GetAllPosts(){
    return this.postsRes.get(this.BaseUrl,{headers: this.headers});
  }
  GetAllUserPosts(id: any){
    return this.postsRes.get(this.BaseUrl+'/user/'+id, {headers: this.headers});
  }
  GetPostById(id: any){
    return this.postsRes.get(this.BaseUrl+'/'+id, {headers: this.headers});
  }
  AddPost(post: any){
    return this.postsRes.post(this.BaseUrl,post, {headers: this.headers});
  }
  UpdatePost(id:any,post: any){
    return this.postsRes.put(this.BaseUrl+'/'+id,post, {headers: this.headers});
  }
  DeletePost(id:any){
    return this.postsRes.delete(this.BaseUrl+'/'+id, {headers: this.headers});
  }


}
