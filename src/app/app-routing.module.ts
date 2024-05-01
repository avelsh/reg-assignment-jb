import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from 'src/app/components/login-page/login-page.component';
import { WelcomePageComponent } from 'src/app/components/welcome-page/welcome-page.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
	{
		path: 'welcome',
		component: WelcomePageComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'login',
		component: LoginPageComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
