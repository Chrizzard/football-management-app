import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../teams.service';
import { Team } from 'src/app/shared/team';

@Component({
  selector: 'app-team-details-page',
  templateUrl: './team-details-page.component.html',
  styleUrls: ['./team-details-page.component.scss'],
})
export class TeamDetailsPageComponent {
  team: Team | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: TeamsService
  ) {}

  ngOnInit() {
    this.getTeam();
  }

  getTeam(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getTeamById(id).subscribe((team) => {
      console.log(team);
      this.team = team;
    })
  }
}
