import { Routes } from '@angular/router';
import { SignUpComponent } from './pop-ups/sign-up/sign-up.component';
import { LogInComponent } from './pop-ups/log-in/log-in.component';
import { HeaderComponent } from './header/header.component';
import { AllListingsComponent } from './All Components/all-listings/all-listings.component';
import { HomeComponent } from './All Components/home/home.component';
import { MyProductsComponent } from './All Components/my-products/my-products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LogInComponent },
  {path: 'allListings', component: AllListingsComponent},
  {path:'header',component:HeaderComponent},
  {path:'myProducts' , component: MyProductsComponent},
  { path: '**', redirectTo: ''}
];
