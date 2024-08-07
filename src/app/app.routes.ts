import { Routes } from '@angular/router';
import { SignUpComponent } from './pop-ups/sign-up/sign-up.component';
import { LogInComponent } from './pop-ups/log-in/log-in.component';
import { HeaderComponent } from './header/header.component';
import { AllListingsComponent } from './All Components/all-listings/all-listings.component';
import { HomeComponent } from './All Components/home/home.component';
import { MyProductsComponent } from './All Components/my-products/my-products.component';
import { MyOrdersComponent } from './All Components/my-orders/my-orders.component';
import { ContactUsComponent } from './All Components/contact-us/contact-us.component';
import { FAQComponent } from './All Components/faq/faq.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LogInComponent },
  {path: 'allListings', component: AllListingsComponent},
  {path:'header',component:HeaderComponent},
  {path:'myProducts' , component: MyProductsComponent},
  {path:'myOrders',component:MyOrdersComponent},
  {path:'contactUs',component:ContactUsComponent},
{path:'faq',component:FAQComponent},
  { path: '**', redirectTo: ''}
];
