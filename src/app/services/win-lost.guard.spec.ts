import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { winLostGuard } from './win-lost.guard';

describe('winLostGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => winLostGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
