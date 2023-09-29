import { TestBed } from '@angular/core/testing';

import { PlayersService } from './players.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Player } from '../shared/player';

describe('PlayersService', () => {
  let service: PlayersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [PlayersService],
    });
    service = TestBed.inject(PlayersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get players', () => {
    const mockPlayers: Player[] = [
      {
        id: 1,
        name: 'Player 1',
        team: {
          id: 1,
          name: 'Team A',
          description: 'Description A',
          league: 'League A',
          country: 'Country A',
          city: 'City A',
        },
        position: 'CB',
        dateOfBirth: 1234567890,
        shirtNumber: 1,
        city: 'City 1',
        country: 'Country 1',
        profile_picture: 'image1.jpg',
      },
      {
        id: 2,
        name: 'Player 2',
        team: {
          id: 2,
          name: 'Team B',
          description: 'Description B',
          league: 'League B',
          country: 'Country B',
          city: 'City B',
        },
        position: 'LB',
        dateOfBirth: 9876543210,
        shirtNumber: 7,
        city: 'City 2',
        country: 'Country 2',
        profile_picture: 'image2.jpg',
      },
    ];

    spyOn(localStorage, 'getItem').and.returnValue('mockToken');

    service.getPlayers().subscribe((players) => {
      expect(players).toEqual(mockPlayers);
    });

    const req = httpMock.expectOne('http://localhost:8080/players');
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBe('Bearer mockToken');

    req.flush(mockPlayers);
  });

  it('should search players by name', () => {
    const mockPlayers: Player[] = [
      {
        id: 1,
        name: 'Player1',
        team: {
          id: 1,
          name: 'Team A',
          description: 'Description A',
          league: 'League A',
          country: 'Country A',
          city: 'City A',
        },
        position: 'Forward',
        dateOfBirth: 1234567890,
        shirtNumber: 10,
        city: 'City 1',
        country: 'Country 1',
        profile_picture: 'image1.jpg',
      },
    ];

    spyOn(localStorage, 'getItem').and.returnValue('mockToken');

    service.searchPlayersByName('Player1').subscribe((players) => {
      expect(players).toEqual(mockPlayers);
    });

    const req = httpMock.expectOne(
      'http://localhost:8080/players?name=Player1'
    );
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBe('Bearer mockToken');

    req.flush(mockPlayers);
  });

  it('should search players by team', () => {
    const mockPlayers: Player[] = [
      {
        id: 2,
        name: 'Player 2',
        team: {
          id: 2,
          name: 'TeamB',
          description: 'Description B',
          league: 'League B',
          country: 'Country B',
          city: 'City B',
        },
        position: 'Midfielder',
        dateOfBirth: 9876543210,
        shirtNumber: 7,
        city: 'City 2',
        country: 'Country 2',
        profile_picture: 'image2.jpg',
      },
    ];

    spyOn(localStorage, 'getItem').and.returnValue('mockToken');

    service.searchPlayersByTeam('TeamB').subscribe((players) => {
      expect(players).toEqual(mockPlayers);
    });

    const req = httpMock.expectOne(
      'http://localhost:8080/players?team=TeamB'
    );
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBe('Bearer mockToken');

    req.flush(mockPlayers);
  });
});
