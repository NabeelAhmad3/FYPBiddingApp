import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-modal.component.html',
  styleUrl: './profile-modal.component.css'
})
export class ProfileModalComponent {
  
  isLoggedIn: boolean = true;

  constructor(private router:Router){}
  
  logout() {
    localStorage.removeItem('authToken');
    this.isLoggedIn = true;
    this.router.navigate(['/']); 
    window.location.reload();
  }
}
