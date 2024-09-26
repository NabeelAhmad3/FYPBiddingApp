import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SetBidComponent } from "../../pop-ups/set-bid/set-bid.component";


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, SetBidComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  description = 'Etiam vulputate neque nec nulla consequat...';
  productInfo: any;
  sellerInfo: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const productData = localStorage.getItem('localdatadetail');
    if (productData) {
      const product: any= JSON.parse(productData);

      this.productInfo = product;
      this.http.get<any>(`http://localhost:5000/users/sellerDetails?userid=88`).subscribe(
        (data) => {
          if (data && data.length > 0) {
            const seller = data[0];
            this.sellerInfo = {
              name: seller.name,
              email: seller.email,
              phone: seller.phone,
              city: seller.city
            };
          }
        },
        (error) => {
          console.error('Error fetching seller info:', error);
        }
      );
      this.http.get<any>(`http://localhost:5000/productsInfo/${product.productid}`).subscribe(
        (data) => {
          if (data) {
            this.productInfo = {
              ...this.productInfo,
              // ...data 
            };
          }
        },
        (error) => {
          console.error('Error fetching product info:', error);
        }
      );
    }
  }
}
