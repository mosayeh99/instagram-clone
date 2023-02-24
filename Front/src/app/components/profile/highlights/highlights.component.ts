import { Component } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent {
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
constructor() { 
this.imageShow = this.highlights[0] ;
// this.nameShow = this.highlights[1][0] ;
this.nameShow = this.highlightName[0] ;
}
}
