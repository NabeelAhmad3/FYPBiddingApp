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
  productid?: number;
  sellerInfo: any = {};

  constructor(private http: HttpClient) {
    const storedProductId = localStorage.getItem('localdatadetail');
    this.productid = storedProductId ? +storedProductId : undefined;
  }

  ngOnInit(): void {
    if (this.productid) {
      this.fetchProductAndSellerDetails(this.productid);
    }
  }
  fetchProductAndSellerDetails(productid: number) {
    console.log("infro")
    this.http.get<any>(`http://localhost:5000/products/productsInfo/${productid}`).subscribe(
      (data) => {
        if (data) {
          this.productInfo = data;
          console.log('Product Info:', this.productInfo); 
        }
      },
      (error) => {
        console.error('Error fetching product info:', error);
      }
    );
  }
}
