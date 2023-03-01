import { HttpClient } from '@angular/common/http'; // for Methods (get-post-...)
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  // ------- URL -------
  private Base_URL = "  " ;
  constructor(private myClient:HttpClient) { }
  
  // ------- Methods -------
  GetAllStories(){
    return this.myClient.get(this.Base_URL);
  }
  GetStoryById(id:number){
    return this.myClient.get(this.Base_URL + "/" + id );
  }
  AddStory(story:any){
    return this.myClient.post(this.Base_URL , story)
  }
  EditStory(id:number , editstory:any){
    return this.myClient.put(this.Base_URL + "/" + id , editstory )
  }
  DeleteStory(id:number){
    return this.myClient.delete(this.Base_URL + "/" + id)
  }
}
