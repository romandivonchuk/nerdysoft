import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Location} from '@angular/common';
import { DataService } from '../data.service';
import { Announcement } from '../interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit {

  done: boolean = false

  newAnnouncement = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  edit: Announcement | undefined
  id: number
  constructor(private dataService: DataService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = +params['id']);
    this.edit = this.dataService.getDataForEdit(this.id)
    debugger;
    if (this.edit) {
      this.newAnnouncement = this.fb.group({
        title: [this.edit.title],
        description: [this.edit.description]
      })
    }
  }

  onSubmit() {

    const flag = window.confirm('Do you realy want create?')
    if (flag ) {
      const data = this.newAnnouncement.value
      data.id = this.edit?.id
      this.dataService.addData(data)
      this.done = true
      setTimeout(() => {
        this.router.navigate([''], { relativeTo: this.route });
      }, 1500)
    }

  }

}
