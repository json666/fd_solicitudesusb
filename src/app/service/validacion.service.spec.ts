import { TestBed } from '@angular/core/testing';

import { ValidacionService } from './validacion.service';

describe('ValidacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidacionService = TestBed.get(ValidacionService);
    expect(service).toBeTruthy();
  });
});
