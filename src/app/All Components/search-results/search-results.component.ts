import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-results',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const searchQuery = params['carname'];
      if (searchQuery) {
        this.searchProducts(searchQuery);
      }
    });
  }

  searchProducts(searchQuery: string): void {
    this.http.get<any[]>('http://localhost:5000/products/search', {
      params: { carname: searchQuery }
    }).subscribe(
      (results) => {
        this.products = results.map(product => ({
          walkicon: 'assets/all7.svg',
          walk: '(10 mins to walk)',
          status: 'Available',
          carname: product.carname,
          image: 'assets/all2.svg',
          description: product.description,
          price: `PKR: ${product.price.toLocaleString()}`,
          fuelicon: 'assets/all4.svg',
          fueltype: product.fueltype,
          caricon: 'assets/all5.svg',
          cartype: product.cartype,
          locationicon: 'assets/all6.svg',
          city: product.city,
        }));
      },
      (error) => {
        console.error('Search error:', error);
      }
    );
  }
}
