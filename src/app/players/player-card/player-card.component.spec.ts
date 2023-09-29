import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCardComponent } from './player-card.component';
import { PlayerImageComponent } from 'src/app/shared/player-image/player-image.component';

describe('PlayerCardComponent', () => {
  let component: PlayerCardComponent;
  let fixture: ComponentFixture<PlayerCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerCardComponent, PlayerImageComponent],
    });
    fixture = TestBed.createComponent(PlayerCardComponent);
    component = fixture.componentInstance;
    component.player = {
      id: 1,
	    name: 'testPlayer',
      team: {
            id: 1,
            name: 'team1',
            description: 'strong',
            league: 'test',
            country: 'netherlands',
            city: 'Amsterdam',
        },
      position: 'CB',
      dateOfBirth: 1,
      shirtNumber: 1,
      city: 'Amsterdam',
      country: 'Netherlands',
      profile_picture: 'test'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
