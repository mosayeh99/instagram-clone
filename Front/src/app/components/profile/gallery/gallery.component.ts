import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { LikesService } from 'src/app/services/likes.service';
import { PostsService } from 'src/app/services/posts.service';
import { SavesService } from 'src/app/services/saves.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  posts:any;
  constructor(private postSrv:PostsService, private likeSrv:LikesService, private saveSrv:SavesService, private commentSrv:CommentsService) {}

  ngOnInit(): void {
    this.postSrv.GetAllPosts().subscribe({
      next: data => {this.posts = data; console.log(data)},
      error: err => console.log(err)
    })
  }
}
