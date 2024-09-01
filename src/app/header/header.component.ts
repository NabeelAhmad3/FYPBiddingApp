import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HeaderModalComponent } from "../pop-ups/header-modal/header-modal.component";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule, CommonModule, HeaderModalComponent,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isNavbarOpen: boolean = false;
  searchQuery: string = '';
  handleToggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  constructor(private router:Router) {}

searchProduct() {
  if (this.searchQuery.trim()) {
    this.router.navigate(['/search'], {
      queryParams: { name: this.searchQuery }
    });
  }
}
}
