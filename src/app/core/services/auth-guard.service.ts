import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const isUserAuthenticated = await this.authService.isAuthenticatedAsPromise();
    if (isUserAuthenticated) {
      return true;
    } else {
      this.router.navigateByUrl('/home');
      return false;
    }
  }
}
