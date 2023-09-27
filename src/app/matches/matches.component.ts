import { Component, OnInit } from '@angular/core';
import { Match } from '../shared/match';
import { MatchesService } from './matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent {
  matches: Match[] = [];
  searchText: string = '';

  constructor(private matchesService: MatchesService) {
    this.matches = [];
  }

  ngOnInit(): void {
    this.matchesService.getAllMatches().subscribe((matches) => {
      this.matches = matches;
      console.log(this.matches);
    });
  }

  performSearch() {
    
  }
}
