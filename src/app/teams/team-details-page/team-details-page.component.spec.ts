import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailsPageComponent } from './team-details-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TeamDetailsComponent } from './team-details/team-details.component';

describe('TeamDetailsPageComponent', () => {
  let component: TeamDetailsPageComponent;
  let fixture: ComponentFixture<TeamDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamDetailsPageComponent, TeamDetailsComponent],
      imports: [HttpClientModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(TeamDetailsPageComponent);
    component = fixture.componentInstance;
    component.team = {
      id: 1,
      name: 'testTeam',
      description: 'test',
      league: 'test',
      country: 'Netherlands',
      city: 'Amsterdam'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
