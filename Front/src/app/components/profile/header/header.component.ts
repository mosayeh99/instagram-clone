import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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
    let following :any =document.getElementById("following-alert-menu");
    alert.style.display = "none" ;
    setting.style.visibility = "hidden" ;
    setting.style.opacity = 0 ;
    followers.style.visibility = "hidden" ;
    followers.style.opacity = 0 ;
    following.style.visibility = "hidden" ;
    following.style.opacity = 0 ;
  }
}
