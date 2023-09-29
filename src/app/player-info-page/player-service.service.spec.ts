import { TestBed } from '@angular/core/testing';

import { PlayerServiceService } from './player-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('PlayerServiceService', () => {
  let service: PlayerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
    });
    service = TestBed.inject(PlayerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
