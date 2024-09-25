import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Correct import for Router
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-header-modal',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import FormsModule here
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.css'] // Correct the property name to styleUrls
})
export class HeaderModalComponent {
  searchQuery: string = '';

  constructor(private router: Router) {} // Correct Router import
  
  searchProduct() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search'], {
        queryParams: { carname: this.searchQuery }
      });
    }
  }
}
