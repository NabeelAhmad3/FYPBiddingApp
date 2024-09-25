import { Component } from '@angular/core';
import { myCardModel } from '../card-home/card-home.model';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feature-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-products.component.html',
  styleUrls: ['../card-home/card-home.component.css']
})
export class FeatureProductsComponent {
  cards: myCardModel[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<myCardModel[]>('http://localhost:5000/products/allData').subscribe(
      (data) => {
        this.cards = data.slice(0,8).map(item => ({
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
  localCardData(data:any){
    localStorage.setItem('localdatadetail',data);
  }
}
