
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, AmountValidator, EqualPasswordsValidator } from '../../../../assets/validators';
import { Router } from '@angular/router';
import  {authenticationcomponentservice} from './authentication.component.service'
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  showIdentity=true;
  public AuthenticationForm: FormGroup;
  errorTrigger=false;
  successTrigger=false;
  message:string;
  constructor(private fb: FormBuilder,
    private router: Router,
    private as:authenticationcomponentservice
  
  ) {
    this.AuthenticationForm = this.fb.group(
      {

        // userName: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        SecretCode: ['', Validators.compose([Validators.required])]

      });
   }

  ngOnInit() {
  }
  toggleIdentity(){
    this.showIdentity=!this.showIdentity;
  }
  onSubmit(obj) {
    console.log(obj.SecretCode);
    this.as.authenticationService(obj.SecretCode).subscribe(data => {
      
      // this.user = data.ResponseData;
      // console.log(this.user);
      // let Currentuser = JSON.stringify(this.user);
      // sessionStorage.setItem('CurrentUser', Currentuser);
      this.router.navigate(['/signup']);


    },
      Error => {
        if(Error.status==401)
        {
          this.errorTrigger=true;
          let errormsg= JSON.parse(Error._body);

          this.message= "Wrong Code! Please try again.";
          console.log(this.message);
        }
        // console.log(Error);
        //  console.log(data);
        // console.log("fail");
        
      // this.errorTrigger=true;
      // this.message="this is error body";
      });
      setTimeout(()=>{
        this.errorTrigger=false;
       },3500)
  }
 
}
