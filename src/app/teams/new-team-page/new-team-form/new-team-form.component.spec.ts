import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeamFormComponent } from './new-team-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('NewTeamFormComponent', () => {
  let component: NewTeamFormComponent;
  let fixture: ComponentFixture<NewTeamFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTeamFormComponent],
      imports: [HttpClientModule, FormsModule],
    });
    fixture = TestBed.createComponent(NewTeamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
