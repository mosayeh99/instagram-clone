import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { ReelsService } from 'src/app/services/reels.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isSearchActive:boolean = false;
  isNotificationActive:boolean = false;
  isSidebarTextActive:boolean = true;
  isPopupMenuActive:boolean = false;
  ToggleSearchDrawer() {
    if (this.isNotificationActive) {
      this.isNotificationActive = false;
      this.isSidebarTextActive = true;
    }
    this.isSidebarTextActive = !this.isSidebarTextActive;
    this.isSearchActive = !this.isSearchActive;
  }
  ToggleNotificationDrawer() {
    if (this.isSearchActive) {
      this.isSearchActive = false;
      this.isSidebarTextActive = true;
    }
    this.isSidebarTextActive = !this.isSidebarTextActive;
    this.isNotificationActive = !this.isNotificationActive;
  }
  TogglePopupMenu() {
    this.isPopupMenuActive = !this.isPopupMenuActive;
  }
  CloseDrawers() {
    this.isSearchActive = false;
    this.isNotificationActive = false;
    this.isPopupMenuActive = false;
    this.isSidebarTextActive = true;
  }
  openPopUp() {
    let PopUp :any =document.getElementById("PopUp");
    let create :any =document.getElementById("create-alert-menu");

    create.style.transition= " 0.2s ease-in-out" ;
    PopUp.style.display = "block" ;
    create.style.visibility = "visible" ;
    create.style.opacity = 1 ;
  }
  cancelPopUp(){
    let PopUp :any =document.getElementById("PopUp");
    let create :any =document.getElementById("create-alert-menu");
    PopUp.style.display = "none" ;
    create.style.visibility = "hidden" ;
    create.style.opacity = 0 ;
    this.isCreateReel = false;
    this.isCreatePost = false;
  }

  // Toggle show create reel popup
  isCreateReel: boolean = false;
  isCreatePost: boolean = false;
  isCreateStory: boolean = false;

  currentUrl:string;
  reelForm: FormGroup;
  postForm: FormGroup;
  storyForm: FormGroup;

  constructor(private reelSrv:ReelsService, private postSrv:PostsService, private fb: FormBuilder) {
    this.currentUrl = window.location.pathname;
    this.reelForm = this.fb.group({
      caption: [''],
      newReel: [''],
    });
    this.postForm = this.fb.group({
      caption: [''],
      newPost: [''],
    });
    this.storyForm = this.fb.group({
      caption: [''],
      newStory: [''],
    });
  }

  // Create new reel
  onSelectReel(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.reelForm.get('newReel').setValue(file);
    }
  }

  onSubmitReel() {
    let reelData = new FormData();
    reelData.append('caption', this.reelForm.get('caption').value);
    reelData.append('reel', this.reelForm.get('newReel').value);
    this.reelSrv.AddReel(reelData).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    });
    this.cancelPopUp();
  }

  // Create new post
  onSelectPost(event:any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      this.postForm.get('newPost').setValue(files);
    }
  }

  onSubmitPost() {
    let postData = new FormData();
    Object.values(this.postForm.get('newPost').value).forEach((file : File) => {
      postData.append('images[]', file)
    });
    postData.append('caption', this.postForm.get('caption').value);
    this.postSrv.AddPost(postData).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    });
    this.cancelPopUp();
  }
}
