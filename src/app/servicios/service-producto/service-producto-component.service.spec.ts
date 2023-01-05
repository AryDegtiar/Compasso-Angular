import { TestBed } from '@angular/core/testing';

import { ServiceProductoComponentService } from './service-producto-component.service';

describe('ServiceProductoComponentService', () => {
  let service: ServiceProductoComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProductoComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
