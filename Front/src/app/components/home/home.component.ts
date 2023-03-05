import { Component , OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { LikesService } from 'src/app/services/likes.service';
import { PostsService } from 'src/app/services/posts.service';
import { SavesService } from 'src/app/services/saves.service';
import {UsersService} from "../../services/users.service";
import {StoriesService} from "../../services/stories.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:any;
  stories:any;
  userLoginInfo:any;
  constructor(private postSrv:PostsService, private storySrv:StoriesService, private likeSrv:LikesService, private saveSrv:SavesService, private commentSrv:CommentsService, private userSrv:UsersService) {}

  ngOnInit(): void {
    // Get All Posts
    this.postSrv.GetAllPosts().subscribe({
      next: data => {this.posts = data; console.log(data)},
      error: err => console.log(err)
    })
    // Get All Stories
    this.storySrv.GetAllStories().subscribe({
      next: data => {this.stories = data; console.log(data)},
      error: err => console.log(err)
    })
    // Get login user info
    setTimeout(() => {
      this.userLoginInfo = this.userSrv.loginUser;
    },10000);
  }

  onAddComment(id:string, event:any) {
    let comment = event.target.previousElementSibling.value;
    if(comment){
      this.commentSrv.AddPostComment({"body":comment},id).subscribe({
        next: res => console.log(res),
        error: err => console.log(err)
      });
      let submitedComment = document.createElement("div");
      submitedComment.innerHTML = `
        <p style="font-size:14px"><b>${this.userLoginInfo.username}</b> ${comment}</p>
      `
      event.target.parentElement.before(submitedComment);
      event.target.previousElementSibling.value = '';
    }
  }

  submittedComment:any;
  onAddCommentWithDisplayPost(id:string, event:any) {
    let comment = event.target.previousElementSibling.value;
    if(comment){
      this.commentSrv.AddPostComment({"body":comment},id).subscribe({
        next: value => {
          this.submittedComment = value;
          console.log(value)
        },
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

  // get index of story in response
  storyIndex:number = null;
  showStory(index:any) {
    this.storyIndex = +index -1;
  }

  // get post
  post:any;
  isShowPostActive: boolean = false;
  onGetPost(id:any) {
    this.submittedComment = '';
    this.postSrv.GetPostById(id).subscribe({
      next: value => {
        this.post = value;
        this.onGetCommentsReplies(this.post.postNum);
        console.log(value)
      },
      error: err => console.log(err)
    })
  }

  onAddCommentLike(id:string){
    this.likeSrv.AddCommentLike(id).subscribe();
  }
  onRemoveCommentLike(id:string){
    this.likeSrv.RemoveCommentLike(id).subscribe();
  }

  commentReplies:any;
  onGetCommentsReplies(id:any){
    this.commentSrv.GetPostCommentsReplies(id).subscribe({
      next: value => {
        this.commentReplies = value;
        console.log(value)
      },
      error: err => console.log(err)
    })
  }
}
