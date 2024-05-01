import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EncryptionService } from 'src/app/services/encryption.service';
import { environment } from 'src/environments/env';

@Component({
  selector: 'jb-registration',
  templateUrl: './registration-pop-up.component.html',
  styleUrls: ['./registration-pop-up.component.css']
})
export class RegistrationPopUpComponent {
  loginError: string = '';
  registrated: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<RegistrationPopUpComponent>, 
    private encryptionService: EncryptionService
  ) {}

	close(): void {
    this.registrated = false;
		this.dialogRef.close();
	}

  signUp(formData: { username: string, password: string, email: string }) {
    localStorage.setItem('username', this.encryptionService.encryptData(formData.username, environment.encryptionKey)); 
    localStorage.setItem('password', this.encryptionService.encryptData(formData.password, environment.encryptionKey)); 
    localStorage.setItem('email', this.encryptionService.encryptData(formData.email, environment.encryptionKey)); 
    this.registrated = true;
    setTimeout(() => {
      this.close();
    }, 3000);
  }
}