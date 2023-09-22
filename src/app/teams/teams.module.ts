import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDetailsPageComponent } from './team-details-page/team-details-page.component';
import { TeamDetailsComponent } from './team-details-page/team-details/team-details.component';
import { TeamOverviewPageComponent } from './team-overview-page/team-overview-page.component';
import { NewTeamPageComponent } from './new-team-page/new-team-page.component';



@NgModule({
  declarations: [
    TeamDetailsPageComponent,
    TeamDetailsComponent,
    TeamOverviewPageComponent,
    NewTeamPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeamsModule { }
