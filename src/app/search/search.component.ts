import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchText: any
  @Output() searchEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.searchEvent.emit(this.searchText)
  }
  clear() {
    this.searchText = ''
    this.search()
  }

}
