import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject, filter, Observable, of, switchMap, take } from 'rxjs';
import { environment } from 'src/environments/env';
import { EncryptionService } from './encryption.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    isAuthenticatedSubject = new BehaviorSubject<string | null>(this.decodeSessionToken);
    isAuthenticated$: Observable<string | null> = this.isAuthenticatedSubject.pipe(filter(itm => Boolean(itm)));

    constructor(
        private router: Router,
        private encryptionService: EncryptionService
    ) {}

    canActivate(): boolean {
        // should be a real session token
        const isAuthenticated = this.encryptionService.decryptData(localStorage.getItem('sessionToken'), environment.encryptionKey);
        console.log(isAuthenticated);

        if (isAuthenticated) {
            this.isAuthenticatedSubject.next(this.decodeSessionToken);
            return true;
        } else {
            // Redirect to login page if not authenticated
            this.isAuthenticatedSubject.next(null);
            this.router.navigate(['/login']);
            return false;
        }
    }

    get sessionToken(): string | null {
		return localStorage.getItem('sessionToken');
	}

    get decodeSessionToken(): string | null {
        return this.encryptionService.decryptData(this.sessionToken, environment.encryptionKey);
    }

    isAuthenticated(): Observable<boolean> {
		return this.isAuthenticated$.pipe(
			take(1),
			switchMap(
				(sessionToken: string | null) => {
					if (sessionToken) {
						return of(true);
					}
					return of(false);
				}
			)
		);
	}
}