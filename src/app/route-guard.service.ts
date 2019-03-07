import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(public router: Router, private authServiceService: AuthService) {
  }

  canActivate(): boolean {
    let authorized = this.authServiceService.checkIfLoggedIn();
    if (!authorized) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
