import { Component, Input } from '@angular/core';
import { SetBidComponent } from "../../../pop-ups/set-bid/set-bid.component";
import { CommonModule } from '@angular/common';
import { RegistrationPageComponent } from "../../../pop-ups/registration-page/registration-page.component";

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [SetBidComponent, CommonModule, RegistrationPageComponent],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css'
})
export class HomeCardComponent {
  @Input() image!: string;
  @Input() carname!: string;
  @Input() price!: number;
  @Input() productid!: number;
  @Input() city!: string;
  @Input() key!: number;
  isLoggedIn: boolean = false;
  Authdata: any = {};
  constructor() {
    this.Authdata = {
      token: localStorage.getItem('authToken'),
      userid: localStorage.getItem('authUserId')
    };
    if (this.Authdata.token) {
      this.isLoggedIn = true;
    }

  }
}
