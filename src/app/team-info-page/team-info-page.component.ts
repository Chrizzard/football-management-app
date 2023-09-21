import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamServiceService } from './team-service.service';
import { tap } from 'rxjs';
import { Team } from '../shared/team';

@Component({
  selector: 'app-team-info-page',
  templateUrl: './team-info-page.component.html',
  styleUrls: ['./team-info-page.component.scss'],
})
export class TeamInfoPageComponent {
  team: Team | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: TeamServiceService
  ) {}

  ngOnInit() {
    this.getTeam();
  }

  getTeam(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getTeamById(id).subscribe((team) => this.team = team);
  }
}
