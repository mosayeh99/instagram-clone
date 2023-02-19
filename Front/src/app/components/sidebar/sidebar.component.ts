import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Routes} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isSearchActive:boolean = false;
  isNotificationActive:boolean = false;
  isSidebarTextActive:boolean = true;
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
  CloseDrawers() {
    this.isSearchActive = false;
    this.isNotificationActive = false;
    this.isSidebarTextActive = true;
  }
}
