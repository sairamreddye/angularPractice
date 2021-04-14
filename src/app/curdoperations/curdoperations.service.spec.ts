import { TestBed } from '@angular/core/testing';

import { CurdoperationsService } from './curdoperations.service';

describe('CurdoperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurdoperationsService = TestBed.get(CurdoperationsService);
    expect(service).toBeTruthy();
  });
});
