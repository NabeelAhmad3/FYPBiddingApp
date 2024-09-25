import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router for navigation
import { FeaturesComponent } from '../../features/features.component';
import { FilterModalComponent } from '../../pop-ups/filter-modal/filter-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-listings',
  standalone: true,
  imports: [FeaturesComponent, FilterModalComponent, CommonModule],
  templateUrl: './all-listings.component.html',
  styleUrls: ['./all-listings.component.css'],
})
export class AllListingsComponent implements OnInit {
  products: any[] = [];
  favorites: any[] = [];

  constructor(private http: HttpClient, private router: Router) {} 

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.http.get<any[]>('http://localhost:5000/products/allData').subscribe({
      next: (data) => {
        this.products = data.map((product) => ({
          walkicon: 'assets/all7.svg',
          walk: '(10 mins to walk)',
          status: 'Available',
          name: product.name,
          image: 'assets/all2.svg',
          description: product.description,
          price: `PKR: ${product.price.toLocaleString()}`,
          fuelicon: 'assets/all4.svg',
          fueltype: product.fueltype,
          caricon: 'assets/all5.svg',
          cartype: product.cartype,
          locationicon: 'assets/all6.svg',
          city: product.city,
          isFavorite: false, 
        }));
      },
      error: (err) => console.error('Error fetching products:', err),
    });
  }

  toggleFavorite(item: any) {
    item.isFavorite = !item.isFavorite;
    if (item.isFavorite) {
      this.favorites.push(item);
    } else {
      this.favorites = this.favorites.filter(
        (favorite) => favorite !== item
      );
    }
    this.router.navigate(['/favorites'], { state: { favorites: this.favorites } });
  }
}
