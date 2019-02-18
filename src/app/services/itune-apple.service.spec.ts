import { TestBed } from '@angular/core/testing';

import { ItuneAppleService } from './itune-apple.service';

describe('ItuneAppleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItuneAppleService = TestBed.get(ItuneAppleService);
    expect(service).toBeTruthy();
  });
});
