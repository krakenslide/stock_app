import { TestBed } from '@angular/core/testing';

import { ValidateMongodbIdService } from './validate-mongodb-id.service';

describe('ValidateMongodbIdService', () => {
  let service: ValidateMongodbIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateMongodbIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
