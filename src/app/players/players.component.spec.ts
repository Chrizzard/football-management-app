import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlayersService } from './players.service';
import { of } from 'rxjs';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;
  let playersService: PlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayersComponent],
      imports: [HttpClientModule, FormsModule],
      providers: [PlayersService],
    });
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    playersService = TestBed.inject(PlayersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPlayers() in ngOnInit', () => {
    const getPlayersSpy = spyOn(component, 'getPlayers');
    component.ngOnInit();
    expect(getPlayersSpy).toHaveBeenCalled();
  });

  it('should perform a search and update players', () => {
    const searchText = 'test';

    // Create mock data for search results
    const mockSearchByNameResults = [
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
        position: 'Forward',
        dateOfBirth: 1234567890,
        shirtNumber: 10,
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
        position: 'Midfielder',
        dateOfBirth: 9876543210,
        shirtNumber: 7,
        city: 'City 2',
        country: 'Country 2',
        profile_picture: 'image2.jpg',
      },
    ];

    const mockSearchByTeamResults = [
      {
        id: 3,
        name: 'Player 3',
        team: {
          id: 1,
          name: 'Team A',
          description: 'Description A',
          league: 'League A',
          country: 'Country A',
          city: 'City A',
        },
        position: 'Defender',
        dateOfBirth: 1111111111,
        shirtNumber: 5,
        city: 'City 3',
        country: 'Country 3',
        profile_picture: 'image3.jpg',
      },
      {
        id: 4,
        name: 'Player 4',
        team: {
          id: 2,
          name: 'Team B',
          description: 'Description B',
          league: 'League B',
          country: 'Country B',
          city: 'City B',
        },
        position: 'Goalkeeper',
        dateOfBirth: 2222222222,
        shirtNumber: 1,
        city: 'City 4',
        country: 'Country 4',
        profile_picture: 'image4.jpg',
      },
    ];

    // Create mock observables for the search results
    const searchByName$ = of(mockSearchByNameResults);
    const searchByTeam$ = of(mockSearchByTeamResults);

    // Spy on service methods and return the mock observables
    spyOn(playersService, 'searchPlayersByName').and.returnValue(searchByName$);
    spyOn(playersService, 'searchPlayersByTeam').and.returnValue(searchByTeam$);

    // Set the search text in the component's searchText property
    component.searchText = searchText;

    // Call the performSearch method
    component.performSearch();

    // Expect that the players property has been updated with the combined unique results
    const expectedResults = [
      ...mockSearchByNameResults,
      ...mockSearchByTeamResults,
    ];
    expect(component.players).toEqual(expectedResults);
  });

  it('should remove duplicate items from an array', () => {
    const inputArray = [1, 2, 2, 3, 4, 4, 5];
    const expectedArray = [1, 2, 3, 4, 5];
    const resultArray = component.removeDuplicates(inputArray);
    expect(resultArray).toEqual(expectedArray);
  });
});
