import { Announcement } from './../interfaces';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private dataService: DataService,private router: Router) { }

  ngOnInit(): void {

  }

  filterText: string = ''

  get announcements(): Announcement[] {
    return this.dataService.getData().filter(item => item.title.toLowerCase().includes(this.filterText.toLowerCase().trim()))
  }

  delete(id: number) {
    const flag = window.confirm('do you want delete?')
    flag && this.dataService.delete(id)
  }

  edit(id: number) {
    const flag = window.confirm('do you want EDIT?')
    flag && this.router.navigate(['edit', id]);
  }

  search(text:string) {
    this.filterText = text
  }
}
