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
import { HeaderComponent } from './components/profile/header/header.component';
import { HighlightsComponent } from './components/profile/highlights/highlights.component';
import { GalleryComponent } from './components/profile/gallery/gallery.component';
import { ShowtapComponent } from './components/profile/showtap/showtap.component';
import { MyreelsComponent } from './components/profile/myreels/myreels.component';
import { SavedComponent } from './components/profile/saved/saved.component';
import { TaggedComponent } from './components/profile/tagged/tagged.component';
// import {FontAwesomeModule} from '@font-awesome/angular-font-awesome';

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
    HeaderComponent,
    HighlightsComponent,
    GalleryComponent,
    ShowtapComponent,
    MyreelsComponent,
    SavedComponent,
    TaggedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
