import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileModalComponent } from "../../pop-ups/profile-modal/profile-modal.component";
import { CardComponent } from '../card/card.component';
import { CardModel } from '../card/card.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-my-products',
  standalone: true,
  imports: [CommonModule, CardComponent, ProfileModalComponent],
  templateUrl: './my-products.component.html',
  styleUrl: './my-products.component.css'
})
export class MyProductsComponent implements OnInit{
  CarData: CardModel[] = []

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<CardModel[]>('http://localhost:5000/products') .subscribe( (data) => {
          this.CarData = data.map(item => ({
            status: "assets/myprostatus.svg",
            image: './assets/all3.svg',
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
