import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot,
                routerStateSnapshot: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated().then(
            (authenticated: boolean) => {
                if (authenticated) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                }
            }
        );
    }

    canActivateChild(activatedRouteSnapshot: ActivatedRouteSnapshot,
                     routerStateSnapghot: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(activatedRouteSnapshot, routerStateSnapghot);
    }
}
