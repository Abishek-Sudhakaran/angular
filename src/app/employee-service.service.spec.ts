import { TestBed } from '@angular/core/testing';

import { EmployeeeServiceService } from './employee-service.service';

describe('EmployeeeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeeServiceService = TestBed.get(EmployeeeServiceService);
    expect(service).toBeTruthy();
  });
});
