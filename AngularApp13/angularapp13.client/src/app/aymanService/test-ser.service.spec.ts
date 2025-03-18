import { TestBed } from '@angular/core/testing';

import { TestSerService } from './test-ser.service';

describe('TestSerService', () => {
  let service: TestSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
