import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { DashboardBodycomponentservice } from './dashboard-body.component.service';

@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.css']
})

export class DashboardBodyComponent {
  ClassCode: any;
  ParticipantsList: any;
  UserFirstClassId: any;

  constructor(private _activatedRoute: ActivatedRoute,
    private ds: DashboardBodycomponentservice) {

    this._activatedRoute.url.subscribe(url => {
      this.ClassCode = this._activatedRoute.snapshot.params['Id'];
      this.GetClassParticipant(this.ClassCode);
    });
  }

  ngOnInit() {
    // this.UserFirstClassId = sessionStorage.getItem('UserFirstClassId');
    // console.log(this.UserFirstClassId);
    // this.GetClassParticipant(this.UserFirstClassId);
  }
  ngOnChanges() {

  }

  GetClassParticipant(ClassCode) {
    console.log(ClassCode);

    this.ds.ClassParticipantService(ClassCode).subscribe(data => {
      console.log(data.ResponseData);
      this.ParticipantsList = data.ResponseData;
      console.log(this.ParticipantsList);
    },
      Error => {
        console.log(Error);
      });
  }

}