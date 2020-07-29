import { TestBed } from '@angular/core/testing';

import { PassConnectService } from './pass-connect.service';

describe('PassConnectService', () => {
  let service: PassConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
