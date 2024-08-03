import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './pop-ups/sign-up/sign-up.component';
import { LogInComponent } from './pop-ups/log-in/log-in.component';
import { AllListingComponent } from './all-listing/all-listing.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LogInComponent },
  {path: 'allListing', component: AllListingComponent},
  { path: '**', redirectTo: ''}
];
