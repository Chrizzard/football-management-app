import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailsPageComponent } from './team-details-page.component';

describe('TeamDetailsPageComponent', () => {
  let component: TeamDetailsPageComponent;
  let fixture: ComponentFixture<TeamDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamDetailsPageComponent]
    });
    fixture = TestBed.createComponent(TeamDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
