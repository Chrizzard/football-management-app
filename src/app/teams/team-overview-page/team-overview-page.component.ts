import { Component, EventEmitter, Output } from '@angular/core';
import { Team } from 'src/app/shared/team';
import { TeamsService } from '../teams.service';



@Component({
  selector: 'app-team-overview-page',
  templateUrl: './team-overview-page.component.html',
  styleUrls: ['./team-overview-page.component.scss'],
})
export class TeamOverviewPageComponent {
  teams: Team[];
  searchText: string = '';

  constructor(private service: TeamsService) {
    this.teams = [];
  }

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

  performSearch() {
    if (this.searchText.trim() === '') {
      this.getTeams();
    } else {
      this.teams = this.teams.filter((team) =>
        team.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
}
