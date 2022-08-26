import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanActivatedChildGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

      if (
      childRoute.queryParamMap.get('account') === 'admin' &&
      childRoute.queryParamMap.get('password') === '12345'
    ) {
      return true;
      console.log(childRoute);
      console.log(state);
    } else {
      console.log(childRoute);
      console.log(state);
      return false;
    }
  }
}
