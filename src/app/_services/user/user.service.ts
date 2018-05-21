import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  constructor(private router:Router) { }

  public userStatus=false;


  isLoggedIn():boolean{
    let userObj=sessionStorage.getItem('CurrentUser')

    if(userObj)
    return true;

    else{
      // this.router.navigate['/landing']
      return false;
    }
  }
}
