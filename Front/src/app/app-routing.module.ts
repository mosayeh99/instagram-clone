import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ExploreComponent} from "./components/explore/explore.component";
import {ReelsComponent} from "./components/reels/reels.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {MessagesComponent} from "./components/messages/messages.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {ActivityComponent} from "./components/activity/activity.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile', component:ProfileComponent},
  {path:'explore', component:ExploreComponent},
  {path:'reels', component:ReelsComponent},
  {path:'messages', component:MessagesComponent},
  {path:'settings', component:SettingsComponent},
  {path:'activity', component:ActivityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
