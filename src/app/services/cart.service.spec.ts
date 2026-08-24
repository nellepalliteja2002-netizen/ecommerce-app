import { TestBed } from '@angular/core/testing';

import { CrtService } from './crt.service';

describe('CrtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrtService = TestBed.get(CrtService);
    expect(service).toBeTruthy();
  });
});
