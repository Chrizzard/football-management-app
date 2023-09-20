import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesSideBarElementComponent } from './matches-side-bar-element.component';

describe('MatchesSideBarElementComponent', () => {
  let component: MatchesSideBarElementComponent;
  let fixture: ComponentFixture<MatchesSideBarElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchesSideBarElementComponent]
    });
    fixture = TestBed.createComponent(MatchesSideBarElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
