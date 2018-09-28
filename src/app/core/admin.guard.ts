import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap, map, take } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return new Promise((resolve) => {

      this.auth.isLoggedIn().subscribe(
        (user) => {
          if (user) {
            //this.router.navigate(['/dash']);
            resolve(true);
          }
          else {
            this.router.navigate(['/login']);
            resolve(false);
          }
        }
      );


    });

  }



}
