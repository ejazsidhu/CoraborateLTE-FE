import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../../../assets/validators';
import { logincomponentservice } from './login.component.service';

import { User } from '../../../Model/User';
import { Router } from '@angular/router'
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/Observable/throw';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // route:RouterModule;
  user: User;
  successTrigger: boolean = true;
   errorTrigger: boolean = true;
   message='';
  public loginForm: FormGroup;
  constructor(private fb: FormBuilder,
    private ls: logincomponentservice,
    private router: Router) {

    this.loginForm = this.fb.group(
      {

        userName: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        password: ['', Validators.compose([Validators.required])]

      });
  }

  ngOnInit() {
  }

  onSubmit(obj) {
    obj.userName = "raemujahid@yahoo.co";
    obj.password = "pakistan";
    this.ls.LoginService(obj.userName, obj.password ).subscribe(data => {
      
      this.user = data.ResponseData;
      console.log(this.user);
      // this.route.navigate(['HeroDetail', { id: this.hero.id }])
      //this.router.navigateByUrl(['show_alunos']);
      // this.router.navigate(['/landing']);
      this.successTrigger=true;
    },
      Error => {
        console.log(Error);
        //  console.log(data);
        console.log("fail");
        
      this.errorTrigger=true;
      this.message="this is error body";
      });


      setTimeout(()=>{
        this.errorTrigger=false;
      },3000)
  }
}



