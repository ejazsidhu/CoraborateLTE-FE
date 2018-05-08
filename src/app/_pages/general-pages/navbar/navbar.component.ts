import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public  logo_lg= require('../../../../assets/images/CoraborateSmallIcon.png');
  public  logo_mini= require('../../../../assets/images/CoraborateSmallIcon.png');
  public user_image=require("../../../../assets/images/user8-128x128.jpg");
  constructor() { }

  ngOnInit() {
  }

}
