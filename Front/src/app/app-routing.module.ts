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
import { InteractionsComponent } from './components/activity/activity-components/interactions/interactions.component';
import { PhotosComponent } from './components/activity/activity-components/photos/photos.component';
import { HistoryComponent } from './components/activity/activity-components/history/history.component';
import { DownloadComponent } from './components/activity/activity-components/download/download.component';
import { ACtivityInteractionslikesComponent } from './components/activity/activity-components/interactions/activity-interactionslikes/activity-interactionslikes.component';
import { ACtivityInteractionsCommentsComponent } from './components/activity/activity-components/interactions/activity-interactions-comments/activity-interactions-comments.component';
import { ACtivityInteractionsRepliesComponent } from './components/activity/activity-components/interactions/activity-interactions-replies/activity-interactions-replies.component';
import { ACtivityInteractionsReviewsComponent } from './components/activity/activity-components/interactions/activity-interactions-reviews/activity-interactions-reviews.component';
import { ACtivityPhotosPostsComponent } from './components/activity/activity-components/photos/activity-photos-posts/activity-photos-posts.component';
import { ACtivityPhotosReelsComponent } from './components/activity/activity-components/photos/activity-photos-reels/activity-photos-reels.component';
import { ACtivityPhotosVideosComponent } from './components/activity/activity-components/photos/activity-photos-videos/activity-photos-videos.component';
import { ACtivityPhotosHighlightsComponent } from './components/activity/activity-components/photos/activity-photos-highlights/activity-photos-highlights.component';
import { AuthGuard } from './services/auth.guard';
import { ResetComponent } from './components/reset/reset.component';
const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'reset', component:ResetComponent},
  {path:'', component: HomeComponent,canActivate:[AuthGuard]},
  {path:'profile/:username', component:ProfileComponent ,canActivate:[AuthGuard] , children: [
    {path:'', component:GalleryComponent},
    {path:'myreels', component:MyreelsComponent},
    {path:'saved', component:SavedComponent},
    {path:'tagged', component:TaggedComponent},
  ],
 },
  {path:'explore', component:ExploreComponent,canActivate:[AuthGuard]},
  {path:'reels', component:ReelsComponent,canActivate:[AuthGuard]},
  {path:'messages', component:MessagesComponent,canActivate:[AuthGuard]},
  {path:'settings', component:SettingsComponent,canActivate:[AuthGuard],children: [
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
  {path:'activity', component:ActivityComponent,canActivate:[AuthGuard],children:[
    {path:"interactions",component:InteractionsComponent,children:[
      {path:"",component:ACtivityInteractionslikesComponent},
      {path:"comments",component:ACtivityInteractionsCommentsComponent},
      {path:"story_replies",component:ACtivityInteractionsRepliesComponent},
      {path:"reviews",component:ACtivityInteractionsReviewsComponent}
    ]},
    {path:"photos_and_videos",component:PhotosComponent,canActivate:[AuthGuard],children:[
      {path:"",component:ACtivityPhotosPostsComponent},
      {path:"reels",component:ACtivityPhotosReelsComponent},
      {path:"videos",component:ACtivityPhotosVideosComponent},
      {path:"highlights",component:ACtivityPhotosHighlightsComponent}
    ]},
    {path:"account_history",component:HistoryComponent},
    {path:"download",component:DownloadComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
