import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HeaderModalComponent } from "../pop-ups/header-modal/header-modal.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule, CommonModule, HeaderModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isNavbarOpen: boolean = false;
  handleToggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
