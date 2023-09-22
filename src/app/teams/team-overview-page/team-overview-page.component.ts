import { Component } from '@angular/core';
import { Team } from 'src/app/shared/team';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-team-overview-page',
  templateUrl: './team-overview-page.component.html',
  styleUrls: ['./team-overview-page.component.scss'],
})
export class TeamOverviewPageComponent {
  teams: Team[] | undefined;

  constructor(private service: TeamsService) {}

  deleteTeam(id: number) {
    this.service.deleteTeam(id).subscribe((r) => console.log(r));
  }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.service.getAllTeams().subscribe((teams) => {
      console.log(teams);
      this.teams = teams;
    });
  }
}
