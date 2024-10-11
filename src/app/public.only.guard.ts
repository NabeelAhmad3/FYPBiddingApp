import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class PublicOnlyGuard implements CanDeactivate<any> {
    constructor(private router: Router) { }

    canDeactivate(
        component: any,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): boolean {
        const usertype = localStorage.getItem('usertype');

        if (usertype === "Admin") {
            this.router.navigate(['/admin']);
            return false; // Prevent deactivation for Admin users
        } else {
            return true; // Allow deactivation for all other users
        }
    }
}
