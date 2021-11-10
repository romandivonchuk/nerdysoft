import { AnnouncementComponent } from './announcement/announcement.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { AnnouncementDetailsComponent } from './announcement-details/announcement-details.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'announcement/:id', component: AnnouncementDetailsComponent },
  { path: 'addAnnouncement', component: AddAnnouncementComponent },
  { path: 'edit/:id', component: AddAnnouncementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
