import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserRouteActivator implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    const routeExists = this.authService.isAuthenticated() &&
      route.params['id'] === this.authService.getCurrentUser();

    if (!routeExists) {
      this.router.navigate(['/404']);
    }

    return !!routeExists;
  }
}

