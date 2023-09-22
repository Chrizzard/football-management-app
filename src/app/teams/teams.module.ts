import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDetailsPageComponent } from './team-details-page/team-details-page.component';
import { TeamDetailsComponent } from './team-details-page/team-details/team-details.component';
import { TeamOverviewPageComponent } from './team-overview-page/team-overview-page.component';
import { NewTeamPageComponent } from './new-team-page/new-team-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { NewTeamFormComponent } from './new-team-page/new-team-form/new-team-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TeamDetailsPageComponent,
    TeamDetailsComponent,
    TeamOverviewPageComponent,
    NewTeamPageComponent,
    NewTeamFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class TeamsModule { }
