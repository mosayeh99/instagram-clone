import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  highlights =
        ["assets/images/profile/highlight/story1.jpg",
        "assets/images/profile/highlight/story2.jpg" ,
        "assets/images/profile/highlight/story3.jpg",
        "assets/images/profile/highlight/story4.jpg",
        "assets/images/profile/highlight/story5.jpg",
        "assets/images/profile/highlight/story6.jpg",
        "assets/images/profile/highlight/story7.jpg",
        "assets/images/profile/highlight/story8.jpg",
        "assets/images/profile/highlight/story9.jpg",
        "assets/images/profile/highlight/story10.jpg",
        // ],

        // [
        // "Chelsea" , "Marsilya" , "Man City" , "Arsenal" , "Man United" ,
        // "Byern Munich" , "BVB" , "Benfica" ,"PSG" , "Barcelona"

        // ]
  ];

highlightName = [
      "Chelsea" , "Marsilya" , "Man City" , "Arsenal" , "Man United" ,
      "Byern Munich" , "BVB" , "Benfica" ,"PSG" , "Barcelona"
  ] ;

  imageShow = "";
  nameShow = "";
  count = 0;
  interval:any;
  username:string;
  constructor(private userSrv:UsersService, private activeRoute:ActivatedRoute) {
    this.username = activeRoute.snapshot.params['username'];
    console.log(this.username);
      this.imageShow = this.highlights[0] ;
      // this.nameShow = this.highlights[1][0] ;
      this.nameShow = this.highlightName[0] ;
    }

    setting() {
    let alert :any =document.getElementById("alert-overlay");
    let setting :any =document.getElementById("setting-alert-menu");

      alert.style.display = "block" ;
      setting.style.transition= " 0.2s ease-in-out" ;
      setting.style.visibility = "visible" ;
      setting.style.opacity = 1 ;
    }

    followers() {
      let alert :any =document.getElementById("alert-overlay");
      let followers :any =document.getElementById("followers-alert-menu");

        alert.style.display = "block" ;
        followers.style.transition= " 0.2s ease-in-out" ;
        followers.style.visibility = "visible" ;
        followers.style.opacity = 1 ;
      }

    following() {
      let alert :any =document.getElementById("alert-overlay");
      let following :any =document.getElementById("following-alert-menu");

        alert.style.display = "block" ;
        following.style.transition= " 0.2s ease-in-out" ;
        following.style.visibility = "visible" ;
        following.style.opacity = 1 ;
      }

    cancel(){
    let alert :any =document.getElementById("alert-overlay");
    let setting :any =document.getElementById("setting-alert-menu");
    let followers :any =document.getElementById("followers-alert-menu");
    alert.style.display = "none" ;
    setting.style.visibility = "hidden" ;
    setting.style.opacity = 0 ;
    followers.style.visibility = "hidden" ;
    followers.style.opacity = 0 ;
  }

  ngOnInit(): void {
    this.userSrv.GetAllUserDetails(this.username).subscribe({
      next: value => console.log(value),
      error: err => console.log(err)
    })
  }

}
