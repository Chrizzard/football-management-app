import { Component, OnInit } from '@angular/core';
import { Match } from '../shared/match';
import { MatchesService } from './matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent {
  matches: Match[] = [];

  constructor(private matchesService: MatchesService){}

  ngOnInit(): void{
    this.matchesService.getAllMatches().subscribe(matches => {
      this.matches = matches;
      console.log(this.matches)
    })
  }
}
