import { TestBed } from '@angular/core/testing';

import { ManagCorrespoindingService } from './manag-correspoinding.service';

describe('ManagCorrespoindingService', () => {
  let service: ManagCorrespoindingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagCorrespoindingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
