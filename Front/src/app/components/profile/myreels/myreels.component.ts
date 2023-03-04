import { Component } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { LikesService } from 'src/app/services/likes.service';
import { PostsService } from 'src/app/services/posts.service';
import { ReelsService } from 'src/app/services/reels.service';
import { SavesService } from 'src/app/services/saves.service';
@Component({
  selector: 'app-myreels',
  templateUrl: './myreels.component.html',
  styleUrls: ['./myreels.component.css']
})
export class MyreelsComponent {
  reels:any;
  constructor(private reelSrv:ReelsService, private likeSrv:LikesService, private commentSrv:CommentsService, private saveSrv:SavesService) {}
  ngOnInit(): void {
    this.onGetAllReels();
  }
  onGetAllReels() {
    this.reelSrv.GetAllReels().subscribe({
      next: value => this.reels = value,
      error: err => console.log(err)
    })
  }

}
