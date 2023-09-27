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

  searchTeams(searchText: string): void {
    this.service.searchTeams(searchText).subscribe((teams) => {
      console.log(teams);
      this.teams = teams;
    });
  }

  performSearch() {
     this.service.searchTeams(this.searchText).subscribe(
      (searchResults) => {
        this.teams = searchResults;
      })
  }
}
