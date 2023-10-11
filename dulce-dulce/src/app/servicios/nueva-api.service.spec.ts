import { TestBed } from '@angular/core/testing';

import { NuevaApiService } from './nueva-api.service';

describe('NuevaApiService', () => {
  let service: NuevaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
