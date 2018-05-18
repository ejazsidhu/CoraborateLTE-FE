import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, AmountValidator, EqualPasswordsValidator } from '../../../../assets/validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  showIdentity=true;
  public signupForm:FormGroup;

  constructor(private fb:FormBuilder) {

    this.signupForm=this.fb.group({
      firstName:['',Validators.compose([Validators.required,Validators.minLength(4)])],
      lastName:['',Validators.compose([Validators.required,Validators.minLength(4)])],
      email:['',Validators.compose([Validators.required,EmailValidator.validate])],
      phoneNumber:['',Validators.compose([Validators.required,AmountValidator.validate,])],
      verificationCode:['',Validators.required],
      dOB:['',Validators.required,AmountValidator.validate],
      gender:['',Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      repeatPassword: ['', Validators.compose([Validators.required, Validators.minLength(4)])]

    }
  
);

   }

  ngOnInit() {
  }
  toggleIdentity(){
    this.showIdentity=!this.showIdentity;
  }
}
