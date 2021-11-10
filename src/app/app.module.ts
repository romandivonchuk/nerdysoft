import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AnnouncementDetailsComponent } from './announcement-details/announcement-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent,
    SearchComponent,
    MainComponent,
    AddAnnouncementComponent,
    AnnouncementDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
