import { Component } from '@angular/core';
import { LiveListingComponent } from "./live-listing/live-listing.component";
import { WorksSectionComponent } from "./works-section/works-section.component";
import { ProductSectionComponent } from "./product-section/product-section.component";
import { FeaturesComponent } from "../../features/features.component";
import { LogInComponent } from "../../pop-ups/log-in/log-in.component";
import { SignUpComponent } from '../../pop-ups/sign-up/sign-up.component';
import { ProfileModalComponent } from "../../pop-ups/profile-modal/profile-modal.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LiveListingComponent, WorksSectionComponent, ProductSectionComponent, FeaturesComponent, LogInComponent, SignUpComponent, ProfileModalComponent,CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isNavbarOpen: boolean = false;
  handleToggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
