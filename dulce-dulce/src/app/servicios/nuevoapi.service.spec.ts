import { TestBed } from '@angular/core/testing';

import { NuevoapiService } from './nuevoapi.service';

describe('NuevoapiService', () => {
  let service: NuevoapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevoapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
