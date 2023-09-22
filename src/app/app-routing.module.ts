import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerInfoPageComponent } from './player-info-page/player-info-page.component';
import { TeamDetailsPageComponent } from './teams/team-details-page/team-details-page.component';

const routes: Routes = [
  { path: 'teams/:id', component: TeamDetailsPageComponent },
  { path: 'players/:id', component: PlayerInfoPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
