import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  public submitted = false;

  constructor(public fb: FormBuilder, public router: Router) { }

  ngOnInit(): void {

  }

  // To set the validations
  get loginFormControls() {
    return this.loginForm.controls;
  }

  // To navigate to next page
  loginClick() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.router.navigate(['home']);
  }

}
