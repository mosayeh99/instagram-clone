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
import {EditProfileComponent} from "./components/settings/settingsComponents/edit-profile/edit-profile.component";
import {ChangePasswordComponent} from "./components/settings/settingsComponents/change-password/change-password.component";
import {PushNotificationsComponent} from "./components/settings/settingsComponents/push-notifications/push-notifications.component";
import {AppsAndWebsitesComponent} from "./components/settings/settingsComponents/apps-and-websites/apps-and-websites.component";
import {EmailNotificationsComponent} from "./components/settings/settingsComponents/email-notifications/email-notifications.component";
import {ManageContactsComponent} from "./components/settings/settingsComponents/manage-contacts/manage-contacts.component";
import {AdsComponent} from "./components/settings/settingsComponents/ads/ads.component";
import {SupervisionComponent} from "./components/settings/settingsComponents/supervision/supervision.component";
import {LoginActivityComponent} from "./components/settings/settingsComponents/login-activity/login-activity.component";
import {EmailsFromInstagramComponent} from "./components/settings/settingsComponents/emails-from-instagram/emails-from-instagram.component";
import {HelpComponent} from "./components/settings/settingsComponents/help/help.component";
import {DigitalCollectiblesComponent} from "./components/settings/settingsComponents/digital-collectibles/digital-collectibles.component";
import {PrivacyAndSecurityComponent} from "./components/settings/settingsComponents/privacy-and-security/privacy-and-security.component";

import { GalleryComponent } from './components/profile/gallery/gallery.component';
import { MyreelsComponent } from './components/profile/myreels/myreels.component';
import { SavedComponent } from './components/profile/saved/saved.component';
import { TaggedComponent } from './components/profile/tagged/tagged.component';
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile', component:ProfileComponent , children: [
    {path:'', component:GalleryComponent},
    {path:'myreels', component:MyreelsComponent},
    {path:'saved', component:SavedComponent},
    {path:'tagged', component:TaggedComponent},
  ]},
  {path:'explore', component:ExploreComponent},
  {path:'reels', component:ReelsComponent},
  {path:'messages', component:MessagesComponent},
  {path:'settings', component:SettingsComponent,children: [
    {path:"",component:EditProfileComponent},
    {path:"changepassword",component:ChangePasswordComponent},
    {path:"appsandwebsites",component:AppsAndWebsitesComponent},
    {path:"emailnotifications",component:EmailNotificationsComponent},
    {path:"pushnotifications",component:PushNotificationsComponent},
    {path:"managecontacts",component:ManageContactsComponent},
    {path:"privacyandsecurity",component:PrivacyAndSecurityComponent},
    {path:"ads",component:AdsComponent},
    {path:"supervision",component:SupervisionComponent},
    {path:"loginactivity",component:LoginActivityComponent},
    {path:"emailsfrominstagram",component:EmailsFromInstagramComponent},
    {path:"help",component:HelpComponent},
    {path:"digitalcollectibles",component:DigitalCollectiblesComponent},
  ]},
  {path:'activity', component:ActivityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
