import { TestBed } from '@angular/core/testing';

import { NumberService } from './services/number.service';

describe('NumberService', () => {
  let service: NumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
