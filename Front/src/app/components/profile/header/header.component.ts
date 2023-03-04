import { Component ,OnInit } from '@angular/core';
import { count } from 'rxjs';
import { FollowersService } from 'src/app/services/followers.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  FollowersNumber:any;
  FollowingsNumber:any;
  FollowersName:any;
  FollowingsName:any;

  //Follow Test Button
  toggle = true;
status = 'Follow'; 

enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Follow' : 'UnFollow';
    if(this.status == 'UnFollow' ){
      this.FollowerService.MakeFollow('3').subscribe();
      this.ngOnInit();
    }else if (this.status == 'Follow' ) {
      this.FollowerService.MakeUnfollow('3').subscribe();
      this.ngOnInit();
    }
}
  setting() {
    let alert :any =document.getElementById("alert-overlay");
    let setting :any =document.getElementById("setting-alert-menu");

      setting.style.transition= " 0.2s ease-in-out" ;
      alert.style.display = "block" ;
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

      this.FollowerService.GetAllFollowers().subscribe(
        {
          next:(data)=>{
            this.FollowersName = data;
            console.log(data);
  
          },
          error:(err)=>{} 
        }
      ) 
      }

    following() {
      let alert :any =document.getElementById("alert-overlay");
      let following :any =document.getElementById("following-alert-menu");
        
        alert.style.display = "block" ;
        following.style.transition= " 0.2s ease-in-out" ;
        following.style.visibility = "visible" ;
        following.style.opacity = 1 ;

        this.FollowerService.GetAllFollowings().subscribe(
          {
            next:(data)=>{
              this.FollowingsName = data;
              console.log(data);
    
            },
            error:(err)=>{
              console.log(err);
            } 
          }
        ) 

      }

    cancel(){
    let alert :any =document.getElementById("alert-overlay");
    let setting :any =document.getElementById("setting-alert-menu");
    let followers :any =document.getElementById("followers-alert-menu");
    let following :any =document.getElementById("following-alert-menu");
    alert.style.display = "none" ;
    setting.style.visibility = "hidden" ;
    setting.style.opacity = 0 ;
    followers.style.visibility = "hidden" ;
    followers.style.opacity = 0 ;
    following.style.visibility = "hidden" ;
    following.style.opacity = 0 ;
  }

  constructor(public FollowerService:FollowersService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.FollowerService.GetFollowersNumber().subscribe(
      {
        next:(data)=>{
        //   if(data){
        //     console.log(data);
        //     this.FollowersNumber=[{count:0}];
        //   }else{
        //   this.FollowersNumber = data;
        //   console.log(data);
        // }
        this.FollowersNumber = data;
        },
        error:(err)=>{}
      }
    )

    this.FollowerService.GetFollowingsNumber().subscribe(
      {
        next:(data)=>{
          this.FollowingsNumber = data;
          // console.log(data);

        },
        error:(err)=>{}
      }
    )


    
  }
  }
