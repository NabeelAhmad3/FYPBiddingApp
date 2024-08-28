import { Component } from '@angular/core';
import { AddCardComponent } from "../../pop-ups/add-card/add-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-setting',
  standalone: true,
  imports: [AddCardComponent,CommonModule],
  templateUrl: './payment-setting.component.html',
  styleUrls: ['./payment-setting.component.css']
})
export class PaymentSettingComponent {
  addedCards: any[] = []; 

  onCardAdded(cardData: any) {
    this.addedCards.push(cardData);
  }
  deleteItem(index: number) {
    if (confirm('Are you sure you want to delete this card?')) {
      this.addedCards.splice(index, 1);
    }
  }
}

