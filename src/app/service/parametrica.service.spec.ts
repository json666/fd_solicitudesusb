import { TestBed } from '@angular/core/testing';

import { ParametricaService } from './parametrica.service';

describe('ParametricaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParametricaService = TestBed.get(ParametricaService);
    expect(service).toBeTruthy();
  });
});
