import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { Announcement } from '../interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit , OnDestroy {
  paramsSubscription: Subscription
  done: boolean = false
  newAnnouncement = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  edit: Announcement | undefined
  id: number
  constructor(private dataService: DataService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => this.id = +params['id']);
    this.edit = this.dataService.getDataForEdit(this.id)
    if (this.edit) {
      this.newAnnouncement = this.fb.group({
        title: [this.edit.title],
        description: [this.edit.description]
      })
    }
  }

  onSubmit() {
    const text  = this.edit ? 'Do you realy want edit?' : 'Do you realy want create?'
    const flag = window.confirm(text)
    if (flag) {
      const data = this.newAnnouncement.value
      if (this.edit) {
        data.id = this.edit.id
        this.dataService.editData(data)
      } else {
        this.dataService.addData(data)
      }
      this.done = true
      setTimeout(() => {
        this.router.navigate([''], { relativeTo: this.route });
      }, 1500)
    }
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
