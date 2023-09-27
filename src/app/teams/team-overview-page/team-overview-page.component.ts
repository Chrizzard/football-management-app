import { Component, EventEmitter, Output } from '@angular/core';
import { Team } from 'src/app/shared/team';
import { TeamsService } from '../teams.service';
import { forkJoin, map } from 'rxjs';

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
    const searchByName$ = this.service.searchTeamsByName(this.searchText);
    const searchByCountry$ = this.service.searchTeamsByCountry(this.searchText);

    forkJoin([searchByName$, searchByCountry$])
      .pipe(
        map(([searchByNameResults, searchByCountryResults]) => [
          ...searchByNameResults,
          ...searchByCountryResults,
        ]),
        map((combinedResults) => this.removeDuplicates(combinedResults))
      )
      .subscribe((uniqueCombinedResults) => {
        this.teams = uniqueCombinedResults;
      });
  }

  removeDuplicates(array: any[]) {
    const seen = new Set();
    return array.filter((item) => {
      const key = JSON.stringify(item);
      return seen.has(key) ? false : seen.add(key);
    });
  }
}
