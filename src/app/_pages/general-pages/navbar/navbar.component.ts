import { Component, OnInit } from '@angular/core';
import { User } from '../../../Model/User';
import { navbarcomponentservice } from './navbar.component.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public logo_lg = require('../../../../assets/images/CoraborateSmallIcon.png');
  public logo_mini = require('../../../../assets/images/CoraborateSmallIcon.png');
  public user_image = require("../../../../assets/images/user8-128x128.jpg");
  constructor( private ns:navbarcomponentservice) {  }

  ngOnInit() {
    sessionStorage.getItem('CurrentUser');
    let CurrentUserObj: User = JSON.parse(sessionStorage.getItem('CurrentUser'));
    this.GetAllClasses(CurrentUserObj);
  }

  GetAllClasses(user: User) {


    this.ns.GetAllClassesService(user.UserId).subscribe(data => {
      console.log(data.ResponseData);


    },
      Error => {
        console.log(Error);
      });
  }

}
