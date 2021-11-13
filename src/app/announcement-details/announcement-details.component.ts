import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Announcement } from '../interfaces';



@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.scss']
})
export class AnnouncementDetailsComponent implements OnInit,OnDestroy {

  constructor(private route: ActivatedRoute, private dataService: DataService,private router: Router) { }
  paramsSubscription: Subscription
  announcement: Announcement
  top: Announcement[]

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      const id = +params['id']
      const {data, top } = this.dataService.getDataById(id)!
      this.announcement = data!
      this.top = top
    });
  }

  changeAnnoun(id:number) {
    this.router.navigate(['announcement', id]);
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
