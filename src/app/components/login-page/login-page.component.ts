import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/env';
import { EncryptionService } from '../../services/encryption.service';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationPopUpComponent } from '../registration-pop-up/registration-pop-up.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'jb-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginError: string = '';

  constructor(
    private encryptionService: EncryptionService,
    private router: Router,
		private dialog: MatDialog
  ) {}

  togglePasswordVisibility(passwordField: HTMLInputElement): void {
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
  }

  login(loginForm: { username: string, password: string, checkbox: boolean }) {
    const username = this.encryptionService.decryptData(localStorage.getItem('username'), environment.encryptionKey);
    const password = this.encryptionService.decryptData(localStorage.getItem('password'), environment.encryptionKey);
      
    if (username === loginForm.username  && password === loginForm.password ) {
      localStorage.setItem('sessionToken', this.encryptionService.encryptData((Math.random() * 1000).toString(), environment.encryptionKey));
      localStorage.setItem('rememberMe', loginForm.checkbox ? 'true' : 'false');
      this.router.navigate(['/welcome']);
    } else {
      this.loginError = 'Invalid username or password. Please try again.';
    }
  }

  signUp(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(RegistrationPopUpComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openForgotPasswordPopUp(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ForgotPasswordComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}