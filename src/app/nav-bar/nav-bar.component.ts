import { Component, Input } from '@angular/core';
import { NavPair } from '../shared/nav-pair';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  searchText: string = '';

  pages: NavPair[] = [
    { label: 'Home', url: '' },
    { label: 'Teams', url: '/teams' },
    { label: 'Players', url: '/players' },
    { label: 'Matches', url: '/matches' },
    { label: 'Login', url: '/login' },
  ];

  filterPages() {
    return this.pages.filter((page) =>
      page.label.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
