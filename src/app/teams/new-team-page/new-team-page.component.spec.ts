import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeamPageComponent } from './new-team-page.component';
import { NewTeamFormComponent } from './new-team-form/new-team-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('NewTeamPageComponent', () => {
  let component: NewTeamPageComponent;
  let fixture: ComponentFixture<NewTeamPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTeamPageComponent, NewTeamFormComponent],
      imports: [HttpClientModule, RouterTestingModule, FormsModule],
    });
    fixture = TestBed.createComponent(NewTeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
