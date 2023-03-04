import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-showtap',
  templateUrl: './showtap.component.html',
  styleUrls: ['./showtap.component.css']
})
export class ShowtapComponent implements OnInit {
  username:any 
  userDetails : any
  constructor(private userSrv:UsersService, private activeRoute:ActivatedRoute) {

this.username = activeRoute.snapshot.params['username'];}
  ngOnInit(): void {
    this.userSrv.GetAllUserDetails(this.username).subscribe({
      next: value => {
        console.log(value ) ; 
        this.userDetails = value  
      },
      error: err => console.log(err)
    })
  }




}
