import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordcomponentservice } from './password.component.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  public PasswordForm: FormGroup;
  CurrentUserObj: any;
  message: string;
  successTrigger: boolean = false;
  errorTrigger: boolean = false;

  constructor(private fb: FormBuilder,
    private ps: passwordcomponentservice) {

    this.PasswordForm = this.fb.group(
      {

        oldpassword: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        newpassword: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        repeatPassword: ['', Validators.compose([Validators.required, Validators.minLength(4)])]

      });
  }

  ngOnInit() {
  }
  ChangePassword(obj) {
    sessionStorage.getItem('CurrentUser');
    this.CurrentUserObj = JSON.parse(sessionStorage.getItem('CurrentUser'));
    // console.log( this.CurrentUserObj.UserId );
    debugger;
    this.ps.ChangePasswordService(this.CurrentUserObj.UserId, obj.oldpassword, obj.newpassword, obj.repeatPassword).subscribe(data => {
      console.log("success");
      // let errormsg= JSON.parse(data.Message);
      this.message = data.Message;
      console.log(data.Message);
      this.PasswordForm.reset();
      this.successTrigger = true;

    },
      Error => {

        if (Error.status == 500) {
          let errormsg = JSON.parse(Error._body);
          this.message = errormsg.Message;
          console.log(this.message);
          this.errorTrigger = true;
        }

      });
       setTimeout(()=>{
        this.errorTrigger=false;
        this.successTrigger= false;
      },2000)

  }

}
