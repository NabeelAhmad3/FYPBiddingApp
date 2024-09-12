import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../card/card.component";
import { CommonModule } from '@angular/common';
import { CardModel } from '../../card/card.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-preview-orders',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './preview-orders.component.html',
  styleUrl: './preview-orders.component.css'
})
export class PreviewOrdersComponent implements OnInit{

  CarData: CardModel[] = []; 

  constructor(private http: HttpClient) {} 
 ngOnInit(): void {
  this.http.get<CardModel[]>('http://localhost:5000/products') .subscribe( (data) => {
        this.CarData = data.map(item => ({
          status: "assets/myprostatus.svg",
          image: './assets/all2.svg',
          carname: item.carname,
          price:item.price,
          eyeTxt: 3423,
          city: item.city
        }));
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
}
}
