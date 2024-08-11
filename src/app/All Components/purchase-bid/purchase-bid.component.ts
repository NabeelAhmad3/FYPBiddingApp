import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-purchase-bid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchase-bid.component.html',
  styleUrl: './purchase-bid.component.css'
})
export class PurchaseBidComponent {

summary=[
 { serial:'1', productName:'Prado 2024',winingAmount:'3323',quantity: '1'},
 { serial: '2', productName: 'Civic 2024', winingAmount: '2879', quantity: '2' },
 { serial: '3', productName: 'Corolla 2024', winingAmount: '3100', quantity: '1' }
]
}
