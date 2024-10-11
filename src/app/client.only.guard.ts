import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class ClientOnly implements CanActivate {
    constructor(private router: Router) { }

    canActivate(): boolean {
        const auth = localStorage.getItem('authToken');
        const usertype = localStorage.getItem('usertype');
        if (auth) {
            if (usertype == "Client") {
                return true;
            } else {
                return false;
            }
        } else {
            this.router.navigate(['/login'])
            return false;
        }
    }
}