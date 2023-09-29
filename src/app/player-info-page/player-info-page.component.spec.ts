import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInfoPageComponent } from './player-info-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('PlayerInfoPageComponent', () => {
  let component: PlayerInfoPageComponent;
  let fixture: ComponentFixture<PlayerInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerInfoPageComponent],
      imports: [HttpClientModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(PlayerInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
