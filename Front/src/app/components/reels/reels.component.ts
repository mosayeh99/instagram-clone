import {Component, HostListener, OnInit} from '@angular/core';
import {ReelsService} from "../../services/reels.service";
import {LikesService} from "../../services/likes.service";
import {CommentsService} from "../../services/comments.service";
import {SavesService} from "../../services/saves.service";
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
  constructor(private reelSrv:ReelsService, private likeSrv:LikesService, private commentSrv:CommentsService, private saveSrv:SavesService) {}
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
}
