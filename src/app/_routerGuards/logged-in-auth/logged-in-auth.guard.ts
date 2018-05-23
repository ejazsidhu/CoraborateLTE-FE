import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../_services/user/user.service';

@Injectable()
export class LoggedInAuthGuard implements CanActivate {

 
  constructor(private user:UserService,private router:Router) {
    
    
  }

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if(!this.user.isLoggedIn()){
        //  this.router.navigate['/dashboard'];
        return true;
      }

      else{
        this.router.navigate(['/dashboard'], {
          // queryParams: {
          //   return: state.url
          // }
        });
        return false;
      }
  }
}
