import { CanActivateFn, Router } from '@angular/router';
import { SpielService } from './spiel.service';
import { inject } from '@angular/core';

export const spielGuard: CanActivateFn = () => {
  const  spielService = inject(SpielService);
  const router = inject(Router);
  if (!spielService.isFormValid) {
    router.navigate(['/start']);
    return false;
  }
  return true;
};
