import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  preloadFinished = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
      if (localStorage.getItem('rememberMe') === 'true') {
        this.router.navigate(['/welcome']);
      } else {
        localStorage.removeItem('sessionToken');
        this.router.navigate(['/login']);
      }
      this.preloadFinished = true;
  }
}
