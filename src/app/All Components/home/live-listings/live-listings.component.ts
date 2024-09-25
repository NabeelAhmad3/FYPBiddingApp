import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { myCardModel } from '../card-home/card-home.model';
import { CommonModule } from '@angular/common';
import { CardHomeComponent } from "../card-home/card-home.component";

@Component({
  selector: 'app-live-listings',
  standalone: true,
  imports: [CommonModule, CardHomeComponent],
  templateUrl: './live-listings.component.html',
  styleUrls: ['./live-listings.component.css']
})
export class LiveListingsComponent implements OnInit {
  cards: myCardModel[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<myCardModel[]>('http://localhost:5000/products/livelistings') .subscribe( (data) => {
          this.cards = data.map(item => ({
            image: './assets/car1.svg',
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
}
