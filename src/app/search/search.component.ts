import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() searchData: any[] = [];
  @Input() initialQuery: string = '';

  @Output() searchResult = new EventEmitter<any[]>();
  @Output() queryChange = new EventEmitter<string>();

  currentQuery: string = '';

  performSearch() {
    const results = this.searchData.filter((item) =>
      item.name.toLowerCase().includes(this.currentQuery.toLowerCase())
    );
    this.searchResult.emit(results);
  }

  onQueryChange() {
    this.queryChange.emit(this.currentQuery);
  }
}
