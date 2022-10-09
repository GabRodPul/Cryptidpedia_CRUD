import { TestBed } from '@angular/core/testing';

import { CryptidEntryService } from './cryptid-entry.service';

describe('CryptidEntryService', () => {
  let service: CryptidEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptidEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
