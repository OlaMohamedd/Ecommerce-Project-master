import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(AuthService);
  const router = inject(Router);

  if (userService.isUserLoggedIn) {
    return true;
  } else {
    alert('Please login First');
    router.navigate(['/login']);
    return false;
  }
};
