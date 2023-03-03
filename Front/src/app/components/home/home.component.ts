import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommentsService } from 'src/app/services/comments.service';
import { LikesService } from 'src/app/services/likes.service';
import { PostsService } from 'src/app/services/posts.service';
import { SavesService } from 'src/app/services/saves.service';
import { StoriesService} from 'src/app/services/stories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:any;
  constructor(private postSrv:PostsService, private likeSrv:LikesService, private saveSrv:SavesService, private commentSrv:CommentsService) {}

  ngOnInit(): void {
    this.postSrv.GetAllPosts().subscribe({
      next: data => {this.posts = data, console.log(data)},
      error: err => console.log(err)
    })
  }

  onAddComment(id:string, event:any) {
    let comment = event.target.previousElementSibling.value;
    if(comment){
      this.commentSrv.AddPostComment({"body":comment},id).subscribe({
        next: res => console.log(res),
        error: err => console.log(err)
      });
      event.target.previousElementSibling.value = '';
    }
  }

  onAddPostLike(id:string){
    this.likeSrv.AddPostLike(id).subscribe();
  }
  onRemovePostLike(id:string){
    this.likeSrv.RemovePostLike(id).subscribe();
  }
  onAddPostToSaved(id:string){
    this.saveSrv.AddPostToSaved(id).subscribe();
  }
  onRemovePostFromSaved(id:string){
    this.saveSrv.RemovePostFromSaved(id).subscribe();
  }
}
