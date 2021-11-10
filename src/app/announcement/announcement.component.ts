import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Announcement } from '../interfaces';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  @Input() announcement: Announcement;
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() editEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.deleteEvent.emit(id)
  }

  edit(id: number) {
    this.editEvent.emit(id)
  }
}
