import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, AmountValidator, EqualPasswordsValidator } from '../../../../assets/validators';
import { signupcomponentservice } from './signup.component.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  showIdentity = true;
  public signupForm: FormGroup;
  // SignupCode:string;
  // SignupData:string;
  constructor(private fb: FormBuilder,
    private ss: signupcomponentservice) {

    this.signupForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      email: ['', Validators.compose([Validators.required, EmailValidator.validate])],
      phoneNumber: ['', Validators.compose([Validators.required, AmountValidator.validate,])],
      verificationCode: ['', Validators.required],
      dOB: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      repeatPassword: ['', Validators.compose([Validators.required, Validators.minLength(4)])]

    }
    );

  }

  ngOnInit() {
    let SignupCode = JSON.parse(sessionStorage.getItem('SignupCode'));
    let SignupData = JSON.parse(sessionStorage.getItem('SignupData'));
    // console.log("567");
    // console.log(sessionStorage.getItem('CurrentUser'));
    // console.log("897");
    // console.log(SignupCode);
    // console.log(this.SignupData);
    // console.log((this.SignupData.FullName));

    // this.signupForm.firstName= SignupData.FullName;
    if (SignupData != undefined) {
      this.signupForm = this.fb.group({
        firstName: [SignupData.FullName, Validators.compose([Validators.required, Validators.minLength(4)])],
        lastName: [SignupData.FullName, Validators.compose([Validators.required, Validators.minLength(4)])],
        email: ['', Validators.compose([Validators.required, EmailValidator.validate])],
        phoneNumber: ['', Validators.compose([Validators.required, AmountValidator.validate,])],
        verificationCode: ['', Validators.required],
        dOB: ['', Validators.required],
        gender: ['', Validators.required],
        password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        repeatPassword: ['', Validators.compose([Validators.required, Validators.minLength(4)])]

      }
      );
    }
    else {
      this.signupForm = this.fb.group({
        firstName: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        lastName: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        email: ['', Validators.compose([Validators.required, EmailValidator.validate])],
        phoneNumber: ['', Validators.compose([Validators.required, AmountValidator.validate,])],
        verificationCode: ['', Validators.required],
        dOB: ['', Validators.required],
        gender: ['', Validators.required],
        password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        repeatPassword: ['', Validators.compose([Validators.required, Validators.minLength(4)])]

      }
      );
    }
  }
  toggleIdentity() {
    this.showIdentity = !this.showIdentity;
  }

  onSubmit(obj) {
    let SignupCode = JSON.parse(sessionStorage.getItem('SignupCode'));
    let SignupData = JSON.parse(sessionStorage.getItem('SignupData'));
    if (SignupData != undefined) {
     console.log(SignupData);
     console.log("SignupData"); 
     console.log(obj);
     debugger;
      this.ss.SignupDataService(SignupData.Id, obj.firstName, obj.lastName, obj.email, obj.phoneNumber, obj.dOB, obj.password, obj.gender).subscribe(data => {
        console.log("SignupData Successful");

      },
        Error => {
          console.log("SignupData error");

        });
    }
    else {
      console.log(SignupCode);
      console.log("SignupCode");
      console.log(obj);
      debugger;
      //
      this.ss.SignupCodeService(obj.firstName, obj.lastName, obj.email, obj.phoneNumber, obj.dOB, obj.password, obj.gender, SignupData.Code).subscribe(data => {
        console.log("SignupCode Successful");

      },
        Error => {
          console.log("SignupCode error");

        });

    }

  }


}
