import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminRouteActivator implements CanActivate {

  constructor (private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    const routeExists = this.authService.isAdmin();

    if (!routeExists) {
      this.router.navigateByUrl('/404');
    }

    return !!routeExists;
  }
}

