import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { spielGuard } from './spiel.guard';

describe('spielGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => spielGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
