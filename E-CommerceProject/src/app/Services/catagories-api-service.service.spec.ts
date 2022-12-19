import { TestBed } from '@angular/core/testing';

import { CatagoriesApiServiceService } from './catagories-api-service.service';

describe('CatagoriesApiServiceService', () => {
  let service: CatagoriesApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatagoriesApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
