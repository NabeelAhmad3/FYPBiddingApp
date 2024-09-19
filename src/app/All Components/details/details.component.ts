import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardHomeComponent } from "../home/card-home/card-home.component";
import { myCardModel } from '../home/card-home/card-home.model';
import { HttpClient } from '@angular/common/http';
import { SetBidComponent } from "../../pop-ups/set-bid/set-bid.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, CardHomeComponent, SetBidComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  description=' vehicula ex lacinia eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae lacus tempor placerat. Etiam vulputate neque nec nulla consequat, non cursus libero suscipit. Fusce tempor dapibus mauris, at vehicula ex lacinia eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae lacus tempor placerat. Etiam vulputate neque nec nulla consequat, non cursus libero suscipit. Fusce tempor dapibus mauris, at vehicula ex lacinia eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae lacus tempor placerat. Etiam vulputate neque nec nulla consequat, non cursus libero suscipit. Fusce tempor dapibus mauris, at vehicula ex lacinia eu.';
  cards: myCardModel[] = [];
  productInfo: any = {};
  sellerInfo:any={};

  img=[
    {img1:'assets/car1.svg', img2:'assets/car2.svg',img3:'assets/car3.svg',}
  ]
  
  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:5000/products/allData').subscribe(
      (data) => {
        if (data && data.length > 0) {
          const product = data[0];  
          this.productInfo = {
            carname: product.carname,
            city: product.city,
            productid:product.productid,
            status: product.status || 'Available',
            deliveryFee: product.deliveryFee || '10000',
            price: product.price,
            currentBid: product.currentBid || '82000000',
            created_at: product.created_at
          };
        }
      },
      (error) => {
        console.error('Error fetching product info:', error);
      }
    );
    this.http.get<any>('http://localhost:5000/users/sellerDetails?userid=88').subscribe(
      (data) => {
        if (data && data.length > 0) {
          const seller = data[0];  
          this.sellerInfo = {
            name: seller.name,
            email:seller.email,
            phone:seller.phone,
            city: seller.city
          };
        }
      },
      (error) => {
        console.error('Error fetching product info:', error);
      }
    );
  }
isRecentComponent: any;

}

