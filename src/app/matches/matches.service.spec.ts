import { TestBed } from '@angular/core/testing';

import { MatchesService } from './matches.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('MatchesService', () => {
  let service: MatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(MatchesService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
