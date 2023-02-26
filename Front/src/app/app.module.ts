import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ReelsComponent } from './components/reels/reels.component';
import { MessagesComponent } from './components/messages/messages.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ActivityComponent } from './components/activity/activity.component';
import { EditProfileComponent } from './components/settings/settingsComponents/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './components/settings/settingsComponents/change-password/change-password.component';
import { AppsAndWebsitesComponent } from './components/settings/settingsComponents/apps-and-websites/apps-and-websites.component';
import { PushNotificationsComponent } from './components/settings/settingsComponents/push-notifications/push-notifications.component';
import { EmailNotificationsComponent } from './components/settings/settingsComponents/email-notifications/email-notifications.component';
import { ManageContactsComponent } from './components/settings/settingsComponents/manage-contacts/manage-contacts.component';
import { PrivacyAndSecurityComponent } from './components/settings/settingsComponents/privacy-and-security/privacy-and-security.component';
import { SupervisionComponent } from './components/settings/settingsComponents/supervision/supervision.component';
import { LoginActivityComponent } from './components/settings/settingsComponents/login-activity/login-activity.component';
import { EmailsFromInstagramComponent } from './components/settings/settingsComponents/emails-from-instagram/emails-from-instagram.component';
import { HelpComponent } from './components/settings/settingsComponents/help/help.component';
import { DigitalCollectiblesComponent } from './components/settings/settingsComponents/digital-collectibles/digital-collectibles.component';
import { AdsComponent } from './components/settings/settingsComponents/ads/ads.component';
import { HeaderComponent } from './components/profile/header/header.component';
import { HighlightsComponent } from './components/profile/highlights/highlights.component';
import { GalleryComponent } from './components/profile/gallery/gallery.component';
import { ShowtapComponent } from './components/profile/showtap/showtap.component';
import { MyreelsComponent } from './components/profile/myreels/myreels.component';
import { SavedComponent } from './components/profile/saved/saved.component';
import { TaggedComponent } from './components/profile/tagged/tagged.component';
import { ActivityComponentsComponent } from './components/activity/activity-components/activity-components.component';
import { InteractionsComponent } from './components/activity/activity-components/interactions/interactions.component';
import { PhotosComponent } from './components/activity/activity-components/photos/photos.component';
import { HistoryComponent } from './components/activity/activity-components/history/history.component';
import { DownloadComponent } from './components/activity/activity-components/download/download.component';
import { ACtivityPhotosPostsComponent } from './components/activity/activity-components/photos/activity-photos-posts/activity-photos-posts.component';
import { ACtivityPhotosReelsComponent } from './components/activity/activity-components/photos/activity-photos-reels/activity-photos-reels.component';
import { ACtivityPhotosVideosComponent } from './components/activity/activity-components/photos/activity-photos-videos/activity-photos-videos.component';
import { ACtivityPhotosHighlightsComponent } from './components/activity/activity-components/photos/activity-photos-highlights/activity-photos-highlights.component';
import { ACtivityInteractionslikesComponent } from './components/activity/activity-components/interactions/activity-interactionslikes/activity-interactionslikes.component';
import { ACtivityInteractionsCommentsComponent } from './components/activity/activity-components/interactions/activity-interactions-comments/activity-interactions-comments.component';
import { ACtivityInteractionsRepliesComponent } from './components/activity/activity-components/interactions/activity-interactions-replies/activity-interactions-replies.component';
import { ACtivityInteractionsReviewsComponent } from './components/activity/activity-components/interactions/activity-interactions-reviews/activity-interactions-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileComponent,
    HomeComponent,
    ExploreComponent,
    ReelsComponent,
    MessagesComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    ActivityComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    AppsAndWebsitesComponent,
    PushNotificationsComponent,
    EmailNotificationsComponent,
    ManageContactsComponent,
    PrivacyAndSecurityComponent,
    SupervisionComponent,
    LoginActivityComponent,
    EmailsFromInstagramComponent,
    HelpComponent,
    DigitalCollectiblesComponent,
    AdsComponent,
    HeaderComponent,
    HighlightsComponent,
    GalleryComponent,
    ShowtapComponent,
    MyreelsComponent,
    SavedComponent,
    TaggedComponent,
    ActivityComponentsComponent,
    InteractionsComponent,
    PhotosComponent,
    HistoryComponent,
    DownloadComponent,
    ACtivityPhotosPostsComponent,
    ACtivityPhotosReelsComponent,
    ACtivityPhotosVideosComponent,
    ACtivityPhotosHighlightsComponent,
    ACtivityInteractionslikesComponent,
    ACtivityInteractionsCommentsComponent,
    ACtivityInteractionsRepliesComponent,
    ACtivityInteractionsReviewsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
