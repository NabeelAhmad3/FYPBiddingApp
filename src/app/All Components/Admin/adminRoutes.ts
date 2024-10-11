import { Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserVerificationComponent } from './user-verification/user-verification.component';
import { ProductVerificationComponent } from './product-verification/product-verification.component';


export const AdminRoute: Routes = [
    { path: 'Home', component: AdminHomeComponent },
    { path: 'user/managment', component: UserManagementComponent },
    { path: 'user/verification', component: UserVerificationComponent },
    { path: 'product/verification', component: ProductVerificationComponent },
    { path: '**', redirectTo: 'Home' }
]