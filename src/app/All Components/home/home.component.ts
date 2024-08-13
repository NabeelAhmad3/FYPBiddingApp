import { Component } from '@angular/core';
import { WorksSectionComponent } from "./works-section/works-section.component";
import { FeaturesComponent } from "../../features/features.component";
import { LogInComponent } from "../../pop-ups/log-in/log-in.component";
import { SignUpComponent } from '../../pop-ups/sign-up/sign-up.component';
import { ProfileModalComponent } from "../../pop-ups/profile-modal/profile-modal.component";
import { CommonModule } from '@angular/common';
import { LiveListingsComponent } from "./live-listings/live-listings.component";
import { FeatureProductsComponent } from "./feature-products/feature-products.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WorksSectionComponent, FeaturesComponent, LogInComponent, SignUpComponent, ProfileModalComponent, CommonModule, LiveListingsComponent, FeatureProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isNavbarOpen: boolean = false;
  handleToggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
