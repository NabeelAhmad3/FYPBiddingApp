import { Component } from '@angular/core';
import { ProfileModalComponent } from "../../pop-ups/profile-modal/profile-modal.component";
import { CommonModule } from '@angular/common';
import { RecentWinsComponent } from "./recent-wins/recent-wins.component";
import { PreviewOrdersComponent } from "./preview-orders/preview-orders.component";

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [ ProfileModalComponent, CommonModule, RecentWinsComponent, PreviewOrdersComponent],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent {
  
}
