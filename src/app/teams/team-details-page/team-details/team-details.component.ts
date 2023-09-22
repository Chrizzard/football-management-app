import { Component, Input } from '@angular/core';
import { Team } from 'src/app/shared/team';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent {
  @Input()
  team!: Team;
}
