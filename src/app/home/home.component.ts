import { Component } from '@angular/core';
import { LiveListingComponent } from "./live-listing/live-listing.component";
import { WorksSectionComponent } from "./works-section/works-section.component";
import { ProductSectionComponent } from "./product-section/product-section.component";
import { FeaturesComponent } from "./features/features.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LiveListingComponent, WorksSectionComponent, ProductSectionComponent, FeaturesComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
