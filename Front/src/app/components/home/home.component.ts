import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoriesService} from 'src/app/services/stories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stories:any;
  id=0;
  constructor(public myService:StoriesService , myActivate:ActivatedRoute) {
  this.id = myActivate.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.myService.GetAllStories().subscribe({
      next:(data)=>{this.stories = data;},
    });
    this.myService.DeleteStory(this.id).subscribe({
      next:(data)=>{this.stories = data;},
    })
  }
}
