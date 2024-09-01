import { Component, OnInit } from '@angular/core';
import { AddCardComponent } from "../../pop-ups/add-card/add-card.component";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment-setting',
  standalone: true,
  imports: [AddCardComponent,CommonModule],
  templateUrl: './payment-setting.component.html',
  styleUrls: ['./payment-setting.component.css']
})
export class PaymentSettingComponent implements OnInit{
  paymentSettings: any[] = [];

  constructor( private http: HttpClient) { }
  
  ngOnInit() {
    this.fetchPaymentSettings(); 
  }
  fetchPaymentSettings() {
    this.http.get('http://localhost:5000/payment_setting')
      .subscribe(
        (response: any) => {
          this.paymentSettings = response.payments;
        },
        error => {
          console.error('Error fetching payment settings', error);
        }
      );
  }

  deleteItem(index: number, cardId: number) {
    if (confirm('Are you sure you want to delete this card?')) {
      this.http.delete(`http://localhost:5000/payment_setting/${cardId}`)
        .subscribe(
          response => {
            console.log('Card deleted successfully:', response);
            this.paymentSettings.splice(index, 1);
          },
          error => {
            console.error('Error deleting card:', error);
          }
        );
    }
  }
}

