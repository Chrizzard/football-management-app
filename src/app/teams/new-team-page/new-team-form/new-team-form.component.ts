import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/team';
import { TeamsService } from '../../teams.service';

@Component({
  selector: 'app-new-team-form',
  templateUrl: './new-team-form.component.html',
  styleUrls: ['./new-team-form.component.scss'],
})
export class NewTeamFormComponent {
  formData = {
    name: '',
    description: '',
    league: '',
    country: '',
    city: '',
  };

  enumCountry: string[] | undefined;
  enumLeague!: string[];

  constructor(
    private service: TeamsService
  ) {}

  onSubmit() {
    console.log(this.formData);  
    this.service.addTeam(this.formData).subscribe(r => console.log(r));
  }

  ngOnInit() {
    this.service.getCountries().subscribe((countries) => {
      console.log(countries);
      this.enumCountry = countries;
    })

    this.service.getLeagues().subscribe((leagues) => {
      console.log(leagues);
      this.enumLeague = leagues;
    })
  }
}
