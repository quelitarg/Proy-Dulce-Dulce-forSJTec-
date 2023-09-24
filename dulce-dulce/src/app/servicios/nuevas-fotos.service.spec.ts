import { TestBed } from '@angular/core/testing';

import { NuevasFotosService } from './nuevas-fotos.service';

describe('NuevasFotosService', () => {
  let service: NuevasFotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevasFotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
