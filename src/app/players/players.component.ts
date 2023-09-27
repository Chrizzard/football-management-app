import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../shared/player';
import { PlayersService } from './players.service';
import { forkJoin } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  players: Player[];
  searchText: string = '';

  constructor(private service: PlayersService) {
    this.players = [];
  }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(): void {
    this.service.getPlayers().subscribe((players) => {
      this.players = players;
    });
  }

  performSearch() {
    const searchByName$ = this.service.searchPlayersByName(this.searchText);
    const searchByTeam$ = this.service.searchPlayersByTeam(this.searchText);

    forkJoin([searchByName$, searchByTeam$])
      .pipe(
        map(([searchByNameResults, searchByTeamResults]) => [
          ...searchByNameResults,
          ...searchByTeamResults,
        ]),
        map((combinedResults) => this.removeDuplicates(combinedResults)) 
      )
      .subscribe((uniqueCombinedResults) => {
        this.players = uniqueCombinedResults;
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
