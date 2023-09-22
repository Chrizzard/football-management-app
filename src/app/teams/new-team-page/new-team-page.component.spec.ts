import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeamPageComponent } from './new-team-page.component';

describe('NewTeamPageComponent', () => {
  let component: NewTeamPageComponent;
  let fixture: ComponentFixture<NewTeamPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTeamPageComponent]
    });
    fixture = TestBed.createComponent(NewTeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
