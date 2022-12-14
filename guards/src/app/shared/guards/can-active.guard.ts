import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanActiveGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (route.queryParamMap.get('account') === 'admin' && route.queryParamMap.get('password') === '1234') {
      return true;
      console.log(route);
      console.log(state);
    } else {
      console.log(route);
      console.log(state);
      return false;
    }

    // return true;
  }
}
