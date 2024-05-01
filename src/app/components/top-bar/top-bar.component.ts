import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthGuard } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'jb-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  loginError: string = '';
  isAuthenticated$: Observable<boolean> = of(false);

  constructor(
    private router: Router,
    private authGourd: AuthGuard
  ) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.authGourd.isAuthenticated();
  }

  logOut() {
    localStorage.removeItem('sessionToken');
    this.authGourd.isAuthenticatedSubject.next(null);
    this.isAuthenticated$ = this.authGourd.isAuthenticated();
    this.router.navigate(['/login']);
  }
}