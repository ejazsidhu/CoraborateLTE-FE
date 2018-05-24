import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { forgetpasswordcomponentservice } from './forget-password.component.service';
import { EmailValidator, AmountValidator, EqualPasswordsValidator } from '../../../../assets/validators';
import { Router } from '@angular/router'
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class forgetPasswordComponent implements OnInit {
  public forgetPasswordForm: FormGroup;
  CurrentUserObj: any;
  message: string;
  successTrigger: boolean = false;
  errorTrigger: boolean = false;

  constructor(private fb: FormBuilder,
    private fs: forgetpasswordcomponentservice,
    private router: Router) {

    this.forgetPasswordForm = this.fb.group(
      {
        email: ['', Validators.compose([Validators.required, EmailValidator.validate])]
      });
  }

  ngOnInit() {
  }

  forgetPassword(obj) {

    debugger;
    this.fs.forgetpasswordService(obj.email).subscribe(data => {
      console.log("success");
      // this.message = data.Message;
      this.message = "Please check your email for instructions on how to reset your password! If you do not receive anything, please check your spam folder for an email from coraborate.com.";
      console.log(data.Message);
      this.forgetPasswordForm.reset();
      this.successTrigger = true;

      this.router.navigate(['/Login']);
    },
      Error => {
        console.log(Error);
        // if (Error.status == 500) {
        //   let errormsg = JSON.parse(Error._body);
        //   this.message = errormsg.Message;
        //   console.log(this.message);
        //   this.errorTrigger = true;
        // }

      });
    setTimeout(() => {
      this.errorTrigger = false;
      this.successTrigger = false;
    }, 2000)
  }
}
