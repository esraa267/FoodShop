import { TestBed } from '@angular/core/testing';

import { HeaderInceptorService } from './header-inceptor.service';

describe('HeaderInceptorService', () => {
  let service: HeaderInceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderInceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
