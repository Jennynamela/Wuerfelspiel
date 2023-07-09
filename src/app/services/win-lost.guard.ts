import { CanActivateFn, Router } from '@angular/router';
import { SpielService } from './spiel.service';
import { inject } from '@angular/core';

export const winLostGuard: CanActivateFn = () => {
  const  spielService = inject(SpielService);
  const router = inject(Router);
  if(spielService.message === ''){
    router.navigate(['/start']);
    return false;
  }
  return true;
};
