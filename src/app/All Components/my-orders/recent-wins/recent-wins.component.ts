import { Component, OnInit } from '@angular/core';
import { CardModel } from '../../card/card.model';
import { CardComponent } from "../../card/card.component";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recent-wins',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './recent-wins.component.html',
  styleUrl: './recent-wins.component.css'
})
export class RecentWinsComponent implements OnInit{
  CarData: CardModel[] = []
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<CardModel[]>('http://localhost:5000/products/allData') .subscribe( (data) => {
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
