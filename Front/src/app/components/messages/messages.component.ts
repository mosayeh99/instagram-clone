import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// import Pusher from 'pusher-js';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

 messageModel: sendedMessage
fetchedData!: fetchedData[]
 constructor(private http: HttpClient) {
 this.messageModel = new sendedMessage;
 }

  ngOnInit(): void {
    this.getAllMessage()
    // pusher
    // Pusher.logToConsole = true;

    // const pusher = new Pusher('91f6d26206d7be8fd74d', {
    //   cluster: 'mt1'
    // });

    // const channel = pusher.subscribe('chat');
    // channel.bind('MessageSent', (data: any) => {
    //  this.messageModel.push(data);
    // });
  }

  send(){
    this.http.post('http://localhost:8000/api/send', {
      user_id: this.messageModel.user_id,
      message: this.messageModel.message
    }).subscribe(()=>{
      this.getAllMessage()
      this.messageModel.message = " "
    }
    );
  }

  getAllMessage() {
    this.http.get('http://127.0.0.1:8000/api/fetch').subscribe((data:any)=> this.fetchedData = data)
  }



}

export class sendedMessage {
  push(data: any) {
    throw new Error('Method not implemented.');
  }
  user_id!:number;
  message!:string;
  constructor(){
    this.user_id = 1
  }
}

export class fetchedData{

  id!: number;
  user_id!: number;
  message!: string;
  created_at!: string;
  updated_at!: string;
  user!:userData
}

export interface userData {
  id: number;
      name: string;
      username: string;
      email: string;
      phone: number;
      gender: string;
      bio: string;
      profile_img: string;
      email_verified_at: string;
      created_at: string;
      updated_at: string;
  }

