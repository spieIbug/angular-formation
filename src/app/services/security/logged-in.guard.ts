import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.warn('can activate ? ');
    const loggedIn = this.userService.isLoggedIn();

    if (!loggedIn) {
      this.router.navigate(['/login']);
    }

    return loggedIn;
  }
}
