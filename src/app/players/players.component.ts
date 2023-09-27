import { Component, Input, OnInit } from '@angular/core';
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

  handleSearchResult(results: any[]) {
    // Implement your logic to handle search results here
    // For example, you can update the 'items' property with the search results
    this.items = results;
  }

  // Define the handleQueryChange method
  handleQueryChange(query: string) {
    // Implement your logic to handle query changes here
    // For example, you can filter the 'items' based on the query
    this.items = this.players.filter((player: { name: string; }) =>
      player.name.toLowerCase().includes(query.toLowerCase())
    );
  }
}
