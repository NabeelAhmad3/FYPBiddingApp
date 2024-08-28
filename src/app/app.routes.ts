import { TransactionHistoryComponent } from './All Components/transaction-history/transaction-history.component';
import { Routes } from '@angular/router';
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
import { PaymentSettingComponent } from './All Components/payment-setting/payment-setting.component';
import { VerificationCenterComponent } from './All Components/verification-center/verification-center.component';
import { DetailsComponent } from './details/details.component';
import { PurchaseBidComponent } from './All Components/purchase-bid/purchase-bid.component';

export const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'header',component:HeaderComponent},
  {path:'allListings', component: AllListingsComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'faq',component:FAQComponent},
  {path:'sellProducts',component:SellProductsComponent},
  {path:'profileSet',component:ProfileSettingComponent},
  {path:'verificationCent',component:VerificationCenterComponent},
  {path:'myOrders',component:MyOrdersComponent},
  {path:'helpUs',component:HelpUsComponent},
  {path:'myProducts' , component: MyProductsComponent},
  {path:'details',component:DetailsComponent},
  {path:'editInfo',component:EditInformationComponent},
  {path:'purchaseBid',component:PurchaseBidComponent},
  {path:'paymetnSet',component:PaymentSettingComponent},
  {path:'transHistory',component:TransactionHistoryComponent},
  { path: '**', redirectTo: ''}
];
