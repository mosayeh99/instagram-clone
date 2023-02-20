import {Component} from '@angular/core';

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
  currentUrl:string;
  constructor() {
    this.currentUrl = window.location.pathname;
    console.log(this.currentUrl);
  }
}
