import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { ProfileModalComponent } from "../../pop-ups/profile-modal/profile-modal.component";
import { FeaturesComponent } from "../../home/features/features.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-all-listings',
  standalone: true,
  imports: [HeaderComponent, ProfileModalComponent, FeaturesComponent, FooterComponent],
  templateUrl: './all-listings.component.html',
  styleUrl: './all-listings.component.css'
})
export class AllListingsComponent {

}
