import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-pages',
  templateUrl: './test-pages.component.html',
  styleUrls: ['./test-pages.component.css']
})
export class TestPagesComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.image="/src/assets/images/logo.png";
    this.loginForm = this.fb.group(
      {

        
        password: ['', Validators.compose([Validators.required])]

      });

  }

  ngOnInit() {
  }

}
