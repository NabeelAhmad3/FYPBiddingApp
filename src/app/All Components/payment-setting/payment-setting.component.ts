import { Component } from '@angular/core';
import { AddCardComponent } from "../../pop-ups/add-card/add-card.component";
import { AddMethodComponent } from "../../pop-ups/add-method/add-method.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-setting',
  standalone: true,
  imports: [AddCardComponent, AddMethodComponent,CommonModule],
  templateUrl: './payment-setting.component.html',
  styleUrls: ['./payment-setting.component.css']
})
export class PaymentSettingComponent {
  addedCards: any[] = []; 
  methods: any[] = []; 

  onCardAdded(cardData: any) {
    this.addedCards.push(cardData);
  }
  handleMethodAdded(methodData: any) {
    this.methods.push(methodData); 
  }
  deleteItem(index: number, type: 'card' | 'method') {
    if (type === 'card') {
      this.addedCards.splice(index, 1);
    } else if (type === 'method') {
      this.methods.splice(index, 1);
    }
  }
  
}

