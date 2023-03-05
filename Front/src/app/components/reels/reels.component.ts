import {Component, HostListener, OnInit} from '@angular/core';
import {ReelsService} from "../../services/reels.service";
import {LikesService} from "../../services/likes.service";
import {CommentsService} from "../../services/comments.service";
import {SavesService} from "../../services/saves.service";
import {UsersService} from "../../services/users.service";
@Component({
  selector: 'app-reels',
  templateUrl: './reels.component.html',
  styleUrls: ['./reels.component.css']
})
export class ReelsComponent implements OnInit {
  isMuted:boolean = true;
  isLiked: boolean = false;
  isSaved: boolean = false;
  isFollowing: boolean = false;
  followingStatus = 'Follow';
  ToggleVideoMute() {
    this.isMuted = !this.isMuted;
  }
  getFollowingStatus() {
    if(this.isFollowing) {
      this.followingStatus = 'Following';
      this.isFollowing = !this.isFollowing;
    }
    else {
      this.followingStatus = 'Follow';
      this.isFollowing = !this.isFollowing;
    }
  }
  constructor(private reelSrv:ReelsService, private likeSrv:LikesService, private commentSrv:CommentsService, private saveSrv:SavesService, private userSrv:UsersService) {}
  reels:any;
  ngOnInit(): void {
    this.onGetAllReels();
  }
  onGetAllReels() {
    this.reelSrv.GetAllReels().subscribe({
      next: value => this.reels = value,
      error: err => console.log(err)
    })
  }
  onAddReelLike(id:string){
    this.likeSrv.AddReelLike(id).subscribe();
  }
  onRemoveReelLike(id:string){
    this.likeSrv.RemoveReelLike(id).subscribe();
  }
  onAddReelToSaved(id:string){
    this.saveSrv.AddReelToSaved(id).subscribe();
  }
  onRemoveReelFromSaved(id:string){
    this.saveSrv.RemoveReelFromSaved(id).subscribe();
  }

  onAddCommentLike(id:string){
    this.likeSrv.AddCommentLike(id).subscribe();
  }
  onRemoveCommentLike(id:string){
    this.likeSrv.RemoveCommentLike(id).subscribe();
  }

  comments:any;
  reelIdOfComments:any;
  isCommentsActive: boolean = false;
  onGetComment(id:any) {
    this.comments = '';
    this.reelIdOfComments = id;
    this.commentSrv.GetAllReelComments(id).subscribe({
      next: value => {
        this.comments = value;
        console.log(value)
      },
      error: err => console.log(err)
    })
    this.onGetCommentsReplies(id);
  }

  commentReplies:any;
  onGetCommentsReplies(id:any){
    this.commentReplies = '';
    this.commentSrv.GetReelCommentsReplies(id).subscribe({
      next: value => {
        this.commentReplies = value;
        console.log(value)
      },
      error: err => console.log(err)
    })
  }

  submittedComment:any;
  onAddComment(id:any, event:any) {
    this.submittedComment = '';
    let comment = event.target.previousElementSibling.value;
    if(comment){
      this.commentSrv.AddReelComment({"body":comment},id).subscribe({
        next: value => {
          this.submittedComment = value;
          console.log(value)
        },
        error: err => console.log(err)
      });
      event.target.previousElementSibling.value = '';
    }
  }

  usernameToReply:any;
  repliedCommentId:any;
  onReplyToComment(username:any,id:any) {
    this.usernameToReply = '';
    this.repliedCommentId = '';
    this.usernameToReply = username;
    this.repliedCommentId = id;
    this.isReply = true;
  }

  repliedComment:any;
  isReply:boolean = false;
  onAddReplyToComment(id:any, event:any) {
    let reply = event.target.previousElementSibling.value;
    if(reply){
      this.commentSrv.AddReelComment({"body":reply,"repliedCommentId":this.repliedCommentId},id).subscribe({
        next: value => {
          this.repliedComment = value;
        },
        error: err => console.log(err)
      });
      event.target.previousElementSibling.value = '';
    }
    this.onGetComment(id);
    this.submittedComment = '';
  }
}


