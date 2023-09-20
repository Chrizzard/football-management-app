import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesSideBarComponent } from './matches-side-bar.component';

describe('MatchesSideBarComponent', () => {
  let component: MatchesSideBarComponent;
  let fixture: ComponentFixture<MatchesSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchesSideBarComponent]
    });
    fixture = TestBed.createComponent(MatchesSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
