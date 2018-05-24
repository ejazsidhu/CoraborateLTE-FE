

import { Component, OnInit } from '@angular/core';
import { User } from '../../../Model/User';
import { navbarcomponentservice } from './navbar.component.service';
import { ClassesViews } from '../../../Model/ClassesView';
import { School } from './../../../Model/School';
// import { User} from './../../../Model/User';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ClassesView: ClassesViews;
  school: School = null;
  CurrentUserObj: User;
  UserFirstClassId: any;
  public logo_lg = require('../../../../assets/images/CoraborateSmallIcon.png');
  public logo_mini = require('../../../../assets/images/withoutTextLogo.png');
  public user_image = require("../../../../assets/images/user8-128x128.jpg");
  constructor(private ns: navbarcomponentservice,
    private router: Router) { }

  ngOnInit() {
    let abc = "ibr";
    sessionStorage.getItem('CurrentUser');
    this.CurrentUserObj = JSON.parse(sessionStorage.getItem('CurrentUser'));
    // console.log(this.CurrentUserObj);
    // this.school.ShoolName = this.CurrentUserObj.ShoolName;
    //console.log(CurrentUserObj);
    console.log(this.CurrentUserObj.ShoolName);
    // debugger;
    this.GetAllClasses(this.CurrentUserObj);
    // this.Logout();
  }
  Logout() {
    // debugger;
    sessionStorage.removeItem('CurrentUser');
    console.log(sessionStorage.getItem('CurrentUser'));
    this.router.navigate(['/landing']);
  }
  GetAllClasses(user: User) {

    //console.log(user.UserId);
    this.ns.GetAllClassesService(user.UserId).subscribe(data => {
      //console.log(data.ResponseData);
      this.ClassesView = data.ResponseData;
      debugger;
      // if (this.ClassesView.OwnClassess != undefined) {
      //   this.UserFirstClassId = this.ClassesView.OwnClassess[0].OwnClassId;
      //   sessionStorage.setItem('UserFirstClassId', this.UserFirstClassId);
      // }
      // else// if(this.ClassesView.JoinClassess != undefined)
      // {
      // this.UserFirstClassId = this.ClassesView.OwnClassess[0].OwnClassId;
      //   sessionStorage.setItem('UserFirstClassId', this.UserFirstClassId);
      // }

      console.log(this.ClassesView);
    },
      Error => {
        console.log(Error);
      });
  }

}
