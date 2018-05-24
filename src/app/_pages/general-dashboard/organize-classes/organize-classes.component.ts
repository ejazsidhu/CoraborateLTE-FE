import { Component, OnInit } from '@angular/core';
import { OrganizeClassesService } from './organize-classes.service';
@Component({
  selector: 'app-organize-classes',
  templateUrl: './organize-classes.component.html',
  styleUrls: ['./organize-classes.component.css']
})
export class OrganizeClassesComponent implements OnInit {
  CurrentUserObj: any;
  OwnClassesList: any;
  ArchivedClasses: any;

  constructor(private os: OrganizeClassesService) { }

  ngOnInit() {

    sessionStorage.getItem('CurrentUser');
    this.CurrentUserObj = JSON.parse(sessionStorage.getItem('CurrentUser'));
    this.GetOwnedClasses(this.CurrentUserObj.UserId);
    debugger;
    this.GetArchivedClasses(this.CurrentUserObj.UserId);
  }

  ArchiveClass(ClassId) {
    console.log(ClassId);
    console.log( this.CurrentUserObj.UserId);
    this.CurrentUserObj.UserId;
    this.os.ArchiveClassesservice(this.CurrentUserObj.UserId, ClassId).subscribe(data => {
      console.log("ArchiveClassesservice success");
      // this.OwnClassesList = null;
      // this.ArchivedClasses = null;
      this.GetOwnedClasses(this.CurrentUserObj.UserId);
      // debugger;
       this.GetArchivedClasses(this.CurrentUserObj.UserId);

    },

      Error => {

        console.log(Error);
      });

  }
  
  
  RestoreClass(ClassId) {
    console.log(ClassId);
    console.log(this.CurrentUserObj.UserId);
    this.CurrentUserObj.UserId;
    this.os.RestoreClassesservice(this.CurrentUserObj.UserId, ClassId).subscribe(data => {
      console.log("RestoreClassesservice success");
      // this.OwnClassesList = null;
      // this.ArchivedClasses = null;
      this.GetOwnedClasses(this.CurrentUserObj.UserId);
      // debugger;
       this.GetArchivedClasses(this.CurrentUserObj.UserId);

    },

      Error => {

        console.log(Error);
      });

  }



  GetOwnedClasses(UserId) {
    this.os.GetOwnedClasses(UserId).subscribe(data => {
      this.OwnClassesList = null;
      this.OwnClassesList = data.ResponseData;


    },

      Error => {

        console.log(Error);
      });
  }

  GetArchivedClasses(UserId) {


    this.os.GetArchivedClasses(UserId).subscribe(data => {
      this.ArchivedClasses = null;
      this.ArchivedClasses = data.ResponseData;

      console.log("ArchivedClasses Success");
      // console.log(data2);
      console.log(this.ArchivedClasses);

    },

      Error => {

        console.log(Error);
      });
  }

}
