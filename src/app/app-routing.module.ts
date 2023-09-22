import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerInfoPageComponent } from './player-info-page/player-info-page.component';
import { TeamDetailsPageComponent } from './teams/team-details-page/team-details-page.component';
import { TeamOverviewPageComponent } from './teams/team-overview-page/team-overview-page.component';
import { NewTeamPageComponent } from './teams/new-team-page/new-team-page.component';

const routes: Routes = [
  { path: 'teams', component: TeamOverviewPageComponent },
  { path: 'teams/new', component: NewTeamPageComponent },
  { path: 'teams/:id', component: TeamDetailsPageComponent },
  { path: 'players/:id', component: PlayerInfoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
