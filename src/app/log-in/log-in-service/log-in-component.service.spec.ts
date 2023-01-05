import { TestBed } from '@angular/core/testing';

import { LogInComponentService } from './log-in-component.service';

describe('LogInComponentService', () => {
  let service: LogInComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogInComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
