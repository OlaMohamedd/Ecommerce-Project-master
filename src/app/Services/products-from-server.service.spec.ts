import { TestBed } from '@angular/core/testing';

import { ProductsFromServerService } from './products-from-server.service';

describe('ProductsFromServerService', () => {
  let service: ProductsFromServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsFromServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
