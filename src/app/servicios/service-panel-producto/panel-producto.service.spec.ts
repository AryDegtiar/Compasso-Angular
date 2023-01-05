import { TestBed } from '@angular/core/testing';

import { PanelProductoService } from './panel-producto.service';

describe('PanelProductoService', () => {
  let service: PanelProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
