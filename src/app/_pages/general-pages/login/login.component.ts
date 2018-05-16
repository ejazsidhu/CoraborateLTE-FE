import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { EmailValidator } from '../../../../assets/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    // this.image="/src/assets/images/logo.png";
    this.loginForm = this.fb.group(
      {

        userName: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        password: ['', Validators.compose([Validators.required])]

      });

  }

  ngOnInit() {
  }

  onSubmit(m){
    console.log(m)
  }

}
