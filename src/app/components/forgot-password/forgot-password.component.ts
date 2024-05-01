import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EncryptionService } from 'src/app/services/encryption.service';
import { environment } from 'src/environments/env';


@Component({
  selector: 'jb-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
    password: string | null = '';
    loginError: string = '';
    athentificated: boolean = false;

    constructor(
        private dialogRef: MatDialogRef<ForgotPasswordComponent>, 
        private encryptionService: EncryptionService
    ) {}

    close(): void {
        this.athentificated = false;
        this.dialogRef.close();
    }

    getPassword(formData: { username: string, email: string }) {
        const username = this.encryptionService.decryptData(localStorage.getItem('username'), environment.encryptionKey);
        const email = this.encryptionService.decryptData(localStorage.getItem('email'), environment.encryptionKey);

        if (username === formData.username  && email === formData.email ) {
            this.password = this.encryptionService.decryptData(localStorage.getItem('password'), environment.encryptionKey);
            this.athentificated = true;
            setTimeout(() => {
                this.close();
            }, 3000);
        } else {
            this.loginError = 'Invalid username or email. Please try again.';
        }
    }
}