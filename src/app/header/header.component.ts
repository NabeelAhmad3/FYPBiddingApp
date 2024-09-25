import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HeaderModalComponent } from "../pop-ups/header-modal/header-modal.component";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfileModalComponent } from "../pop-ups/profile-modal/profile-modal.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule, CommonModule, HeaderModalComponent, FormsModule, ProfileModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchQuery: string = '';
  isLoggedIn: boolean = false;
  Authdata: any = {};

  constructor(private router:Router) {
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
    this.router.navigate(['/search'], {
      queryParams: { carname: this.searchQuery }
    });
  }
}
}
