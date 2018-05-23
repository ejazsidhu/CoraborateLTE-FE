import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router:Router) { 

    console.log("landing constructor");


      
    
  }

  ngOnInit() {

    let userObj=sessionStorage.getItem('CurrentUser')

    if(userObj)
     this.router.navigate['/dashboard']
  }

  
}
