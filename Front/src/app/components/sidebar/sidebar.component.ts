import {Component,OnInit} from '@angular/core';
import { SearchHistoriesService } from 'src/app/services/search-histories.service';
import {StoriesService} from 'src/app/services/stories.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  name="";
  users :any;
  saved :any;
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
  currentUrl:string;
  constructor(public myService:StoriesService ,public searchService:SearchHistoriesService) {
    this.currentUrl = window.location.pathname;

  }
                             // Search Handling Methods 
   ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.searchService.GetUsersFromSearchHistory('1').subscribe(
      {
        next:(data)=>{
          this.saved = data;
        },
        error:(err)=>{}
      }
      
    )
  }


  search(e:any){
    if(!e.target.value){
      this.users ='';
    }
    this.searchService.GetUserByName(e.target.value).subscribe(
     {
      next:(data)=>{
        this.users = data;
      },
      error:(err)=>{}
    }
    )
  }



  removeFromHistory(id:any){
    this.searchService.DeleteHistory(id).subscribe();
    this.ngOnInit();
    
  }

  deleteAllHistory(){
    this.searchService.DeleteAllHistory().subscribe();
    this.ngOnInit();
  }



  addUserToSearchHistory(id:any){
    this.searchService.StoreSearchedUserByID(id).subscribe(
      {
      next:(data)=>{},
      error:(err)=>{}
      }
    )
  }
             // End OF Search Handling Methods 
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
  }
  // To add Stories
  AddStory(story_img:string){
    let newStory = {story_img};
    this.myService.AddStory(newStory).subscribe();
  }



}
