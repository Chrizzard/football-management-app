import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModule } from '../search/search.module';
import { PlayersComponent } from './players.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PlayersComponent, PlayerCardComponent],
  imports: [CommonModule, SearchModule, SharedModule],
  exports: [PlayersComponent],
})
export class PlayerModule {}
