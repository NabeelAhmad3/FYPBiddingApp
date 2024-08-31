import { Component } from '@angular/core';
import { myCardModel } from '../card-home/card-home.model';
import { CommonModule } from '@angular/common';
import { CardHomeComponent } from '../card-home/card-home.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feature-products',
  standalone: true,
  imports: [CommonModule,CardHomeComponent],
  templateUrl: './feature-products.component.html',
  styleUrl: '../../home/live-listings/live-listings.component.css'
})
export class FeatureProductsComponent {
  cards: myCardModel[] = [];
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get<myCardModel[]>('http://localhost:5000/products').subscribe(
      (data) => {
        this.cards = data.map(item => ({
          image: './assets/car2.svg', 
          description: item.description,
          productid: `Product ID: ${item.productid}`,
          price: `Price: ${item.price}`,
          city: `City: ${item.city}`
        }));
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}