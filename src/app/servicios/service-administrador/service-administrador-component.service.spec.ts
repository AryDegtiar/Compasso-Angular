import { TestBed } from '@angular/core/testing';

import { ServiceAdministradorComponentService } from './service-administrador-component.service';

describe('ServiceAdministradorComponentService', () => {
  let service: ServiceAdministradorComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdministradorComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
