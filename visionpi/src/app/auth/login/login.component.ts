import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router,
         NavigationExtras } from '@angular/router';
import { AuthService }      from '../auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  hide = true;

  constructor(private formBuilder: FormBuilder, public authService: AuthService, public router: Router) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
    // remove user from local storage to log user out
    localStorage.clear();
  }

  ngOnInit() {
  }

  onSubmit(loginData) {
    this.authService.login(loginData.username, loginData.password)
    .pipe(first())
    .subscribe(data => {
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/home';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigateByUrl(redirect, navigationExtras);
      }
    });
  }

}
