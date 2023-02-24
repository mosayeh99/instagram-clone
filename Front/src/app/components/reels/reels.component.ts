import {Component, HostListener} from '@angular/core';
@Component({
  selector: 'app-reels',
  templateUrl: './reels.component.html',
  styleUrls: ['./reels.component.css']
})
export class ReelsComponent {
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
}
