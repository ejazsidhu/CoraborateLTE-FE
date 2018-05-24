import { Component, OnInit } from '@angular/core';
import { userprofilecomponentservice } from './user-profile.service'
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  CurrentUserObj: any;
  OwnedjoinedClasses: any;
  constructor(private us: userprofilecomponentservice) { }

  ngOnInit() {
    this.CurrentUserObj = JSON.parse(sessionStorage.getItem('CurrentUser'));
    // console.log(this.CurrentUserObj);
    this.GetAllClasses(this.CurrentUserObj);

  }
  GetAllClasses(user) {

    this.us.GetAllClassesService(user.UserId).subscribe(data => {
    
      this.OwnedjoinedClasses = data.ResponseData;
      debugger;
      console.log("user");
      console.log(this.OwnedjoinedClasses);
    },
      Error => {
        console.log(Error);
      });
  }

}
