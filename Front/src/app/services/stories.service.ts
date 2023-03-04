import {HttpClient, HttpHeaders} from '@angular/common/http'; // for Methods (get-post-...)
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  constructor(private storyRes:HttpClient) { }

  private headers = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))}`
  });

  private Base_URL = "http://localhost:8000/api/stories";

  // ------- Methods -------
  GetAllStories(){
    return this.storyRes.get(this.Base_URL, {headers: this.headers});
  }
  // GetStoryById(id:number){
  //   return this.storyRes.get(this.Base_URL + "/" + id );
  // }
  AddStory(story:any){
    return this.storyRes.post(this.Base_URL+ "/add_story" , story, {headers: this.headers})
  }

  DeleteStory(id:any){
    return this.storyRes.delete(this.Base_URL + "/delete/" + id, {headers: this.headers})
  }
}
