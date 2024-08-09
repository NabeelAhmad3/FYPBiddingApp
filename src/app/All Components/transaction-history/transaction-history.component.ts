import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent {
  payTransactions = [
    { date: '2024-08-01', amount: 1000, txt: 'Payment for service' },
    { date: '2024-08-01', amount: 1000, txt: 'Payment for service' },
    { date: '2024-08-05', amount: 500, txt: 'Refund' },
    { date: '2024-08-05', amount: 500, txt: 'Refund' },
  ];

  withdrawTransactions = [
    { date: '2024-08-02', amount: 200, txt: 'ATM Withdrawal' },
    { date: '2024-08-06', amount: 150, txt: 'Online Transfer' },
    { date: '2024-08-02', amount: 200, txt: 'ATM Withdrawal' },
    { date: '2024-08-06', amount: 150, txt: 'Online Transfer' },
  ];

  currentTransaction: string = 'withdraw'; 
  price = 0; 

  showTransaction(type: string) {
    if (type === 'pay') {
      this.currentTransaction = 'pay';
    } else if (type === 'withdraw') {
      this.currentTransaction = 'withdraw';
    }
  }

  deleteRow(type: string, index: number) {
    if (type === 'pay') {
      this.payTransactions.splice(index, 1);
    } else if (type === 'withdraw') {
      this.withdrawTransactions.splice(index, 1);
    }
  }
}
