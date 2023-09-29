import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamOverviewPageComponent } from './team-overview-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('TeamOverviewPageComponent', () => {
  let component: TeamOverviewPageComponent;
  let fixture: ComponentFixture<TeamOverviewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamOverviewPageComponent],
      imports: [HttpClientModule, FormsModule],
    });
    fixture = TestBed.createComponent(TeamOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
