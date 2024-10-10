import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HeaderModalComponent } from "../pop-ups/header-modal/header-modal.component";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfileModalComponent } from "../pop-ups/profile-modal/profile-modal.component";
import { RegistrationPageComponent } from "../pop-ups/registration-page/registration-page.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule, CommonModule, HeaderModalComponent, FormsModule, ProfileModalComponent, RegistrationPageComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchQuery: string = '';
  isLoggedIn: boolean = false;
  Authdata: any = {};

  errorMessage: string | null = null;
  constructor(private router: Router, private http: HttpClient) {
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
      const productid = parseInt(this.searchQuery, 10);
      const queryParams: any = {};

      if (isNaN(productid)) {
        queryParams.carname = this.searchQuery;
      } else {
        queryParams.productid = productid;
      }

      this.http.get<any[]>('http://localhost:5000/products/search', { params: queryParams })
        .subscribe(
          (results) => {
            if (results.length > 0) {
              this.errorMessage = null;
              this.router.navigate(['/search'], { queryParams });
            } else {
              this.errorMessage = 'No products found';
              this.searchQuery = '';
            }
          },
          (error) => {
            console.error('Search error:', error);
            this.errorMessage = 'An error occurred while searching for products.';
            this.searchQuery = '';
          }
        );
    }
  }

}
