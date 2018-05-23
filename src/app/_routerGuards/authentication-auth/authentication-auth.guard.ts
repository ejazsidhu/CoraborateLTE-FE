import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../_services/user/user.service';

@Injectable()
export class AuthenticationAuthGuard implements CanActivate {

  constructor(private user:UserService,private router:Router) {
   
  }
  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

      if(this.user.hasIdentityCode())
    return true;
    else{
      this.router.navigate(['/Authentication'], {
        // queryParams: {
        //   return: state.url
        // }
      });
      return false;
    }
  }
}
