import { Component } from '@angular/core';
import { ProfileModalComponent } from "../../pop-ups/profile-modal/profile-modal.component";

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [ProfileModalComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FAQComponent {

}
