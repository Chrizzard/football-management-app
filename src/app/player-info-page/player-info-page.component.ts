import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerServiceService } from './player-service.service';
import { Player } from '../shared/player';

@Component({
  selector: 'app-player-info-page',
  templateUrl: './player-info-page.component.html',
  styleUrls: ['./player-info-page.component.scss']
})
export class PlayerInfoPageComponent implements OnInit{

  player: Player | undefined
  
  constructor(
    private route: ActivatedRoute,
    private service:PlayerServiceService
  ) {}
  
  ngOnInit() {
    this.getPlayer();
  }

  getPlayer(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getPlayerById(id).subscribe((player) => this.player = player);
  }

}
