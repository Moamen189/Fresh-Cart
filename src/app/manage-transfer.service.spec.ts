import { TestBed } from '@angular/core/testing';

import { ManageTransferService } from './manage-transfer.service';

describe('ManageTransferService', () => {
  let service: ManageTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
