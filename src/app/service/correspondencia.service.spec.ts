import { TestBed } from '@angular/core/testing';

import { CorrespondenciaService } from './correspondencia.service';

describe('CorrespondenciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorrespondenciaService = TestBed.get(CorrespondenciaService);
    expect(service).toBeTruthy();
  });
});
