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
import { SellProductsComponent } from './All Components/sell-products/sell-products.component';
import { HelpUsComponent } from './All Components/help-us/help-us.component';
import { EditInformationComponent } from './All Components/edit-information/edit-information.component';
import { ProfileSettingComponent } from './All Components/profile-setting/profile-setting.component';

export const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'allListings', component: AllListingsComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'faq',component:FAQComponent},
  {path:'sellProducts',component:SellProductsComponent},
  {path:'signup', component: SignUpComponent },
  {path:'login', component: LogInComponent },
  {path:'header',component:HeaderComponent},
  {path:'profileSet',component:ProfileSettingComponent},
  {path:'myOrders',component:MyOrdersComponent},
  {path:'helpUs',component:HelpUsComponent},
  {path:'myProducts' , component: MyProductsComponent},
  {path:'editInfo',component:EditInformationComponent},
  { path: '**', redirectTo: ''}
];
