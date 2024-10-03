import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

export interface myCardModel {
  image: string;
  carname: string;
  price: number;
  productid: number;
  city: string;
}

@Component({
  selector: 'app-feature-products',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './feature-products.component.html',
  styleUrls: ['../home-card/home-card.component.css']
})
export class FeatureProductsComponent {
  cards: myCardModel[] = [];
  isLoggedIn: boolean = false;
  Authdata: any = {};

  constructor(private http: HttpClient) {
    localStorage.setItem('localdatadetail', '');
    this.Authdata = {
      token: localStorage.getItem('authToken'),
      userid: localStorage.getItem('authUserId')
    };
    if (this.Authdata.token) {
      this.isLoggedIn = true;
    }
  }

  ngOnInit(): void {
    this.http.get<myCardModel[]>('http://localhost:5000/products/allData').subscribe(
      (data) => {
        this.cards = data.slice(0, 8).map(item => ({
          image: './assets/car2.svg', 
          carname: item.carname,
          productid: item.productid,
          price: item.price,
          city: item.city
        }));
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  localCardData(data: number) {
    localStorage.setItem('localdatadetail', JSON.stringify(data));
  }
}
