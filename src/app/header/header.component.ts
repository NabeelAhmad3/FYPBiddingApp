import { Component } from '@angular/core';
import { ProfileModalComponent } from "../pop-ups/profile-modal/profile-modal.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProfileModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
