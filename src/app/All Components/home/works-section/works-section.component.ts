import { Component } from '@angular/core';
import { SignUpComponent } from "../../sign-up/sign-up.component";
import { HomeComponent } from "../home.component";

@Component({
  selector: 'app-works-section',
  standalone: true,
  imports: [SignUpComponent, HomeComponent],
  templateUrl: './works-section.component.html',
  styleUrl: './works-section.component.css'
})
export class WorksSectionComponent {

}
