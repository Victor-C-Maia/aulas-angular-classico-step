import { TestBed } from '@angular/core/testing';

import { StarwarsServiceService } from './starwars.service';

describe('StarwarsServiceService', () => {
  let service: StarwarsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarwarsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
