import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from "@angular/material/dialog";
import { RegistrationPopUpComponent } from "./registration-pop-up/registration-pop-up.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from "@angular/common";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

@NgModule({
	declarations: [
        WelcomePageComponent,
        RegistrationPopUpComponent,
		ForgotPasswordComponent
	],
	imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatDialogModule, CommonModule],
	providers: [MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})
export class ComponentsModule {}
