import { Component, OnInit } from '@angular/core';
import { Match } from '../shared/match';
import { MatchesService } from './matches.service';
import {  map } from 'rxjs/operators';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent {
  matches: Match[] = [];
  searchText: string = '';

  constructor(private service: MatchesService) {
    this.matches = [];
  }

  ngOnInit(): void {
    this.service.getAllMatches().subscribe((matches) => {
      this.matches = matches;
      console.log(this.matches);
    });
  }

  performSearch() {
    const searchByAwayName$ = this.service.getMatchByAwayName(this.searchText);
    const searchByHomeName$ = this.service.getMatchByHomeName(this.searchText);

    forkJoin([searchByHomeName$, searchByAwayName$])
      .pipe(
        map(([searchByAwayNameResults, searchByHomeNameResults]) => [
          ...searchByAwayNameResults,
          ...searchByHomeNameResults,
        ]),
        map((combinedResults) => this.removeDuplicates(combinedResults)) 
      )
      .subscribe((uniqueCombinedResults) => {
        this.matches = uniqueCombinedResults;
      });
  }

  removeDuplicates(array: any[]) {
    const seen = new Set();
    return array.filter((item) => {
      const key = JSON.stringify(item); 
      return seen.has(key) ? false : seen.add(key);
    });
  }
    
}
