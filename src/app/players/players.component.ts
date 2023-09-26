import { Component,Input, OnInit } from '@angular/core';
import { Player } from '../shared/player';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  players: any;
  items: any[] = [];

  constructor(private service: PlayersService) {}

  ngOnInit() {
    this.service.getPlayers().subscribe((response) => {
      this.players = response;
      this.items = this.players;
    });
  }

  handleSearchResult(results: any[]) {}

  handleQueryChange(query: string) {
    this.items = this.players.filter((player: { name: string; }) =>
      player.name.toLowerCase().includes(query.toLowerCase())
    );
  }
}
