

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  loginForm = new FormGroup({
    user: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  onLogin(): void {
    this.authService.login('joanmontque@gmail.com','123456')
      .subscribe( user => {

        this.router.navigate(['/']);

      });


  }

}
