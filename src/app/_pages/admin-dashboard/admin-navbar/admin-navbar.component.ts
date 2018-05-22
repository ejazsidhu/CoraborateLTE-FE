import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  public  logo_lg= require('../../../../assets/images/sk2logo.svg');
  public  codegen= require('../../../../assets/images/code-gen.png');
  public  school= require('../../../../assets/images/create-school.png');
  public  logo_mini= require('../../../../assets/images/withoutTexLogo.png');
  public user_image=require("../../../../assets/images/user8-128x128.jpg");
  constructor() { }

  ngOnInit() {
  }

}
