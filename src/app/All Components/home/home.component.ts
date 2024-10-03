import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { WorksSectionComponent } from "./works-section/works-section.component";
import { FeaturesComponent } from "../../features/features.component";
import { ProfileModalComponent } from "../../pop-ups/profile-modal/profile-modal.component";
import { CommonModule } from '@angular/common';
import { LiveListingsComponent } from "./live-listings/live-listings.component";
import { FeatureProductsComponent } from "./feature-products/feature-products.component";
import { Router } from '@angular/router';
import { PreviewOrdersComponent } from "../my-orders/preview-orders/preview-orders.component";
import { RegistrationPageComponent } from "../../pop-ups/registration-page/registration-page.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WorksSectionComponent, FeaturesComponent,
    ProfileModalComponent, CommonModule, LiveListingsComponent, FeatureProductsComponent, FormsModule, PreviewOrdersComponent, RegistrationPageComponent],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isNavbarOpen: boolean = false;
  searchQuery: string = '';
  isLoggedIn: boolean = false;
  Authdata: any = {};

  handleToggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  constructor(private router: Router) {
    this.Authdata = {
      token: localStorage.getItem('authToken'),
      userid: localStorage.getItem('authUserId')
    };
    if (this.Authdata.token) {
      this.isLoggedIn = true;
    }
  }

  searchProduct() {
    if (this.searchQuery.trim()) {
      const productid = parseInt(this.searchQuery, 10);
      const queryParams: any = {};
      if (isNaN(productid)) {
        queryParams.carname = this.searchQuery;
      } else {
        queryParams.productid = productid;
      }
      this.router.navigate(['/search'], { queryParams });
    }
  }
  
}
