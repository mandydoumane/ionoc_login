import { TestBed } from '@angular/core/testing';

import { MandyService } from './mandy.service';

describe('MandyService', () => {
  let service: MandyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MandyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
