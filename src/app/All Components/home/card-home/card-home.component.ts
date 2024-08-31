import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SetBidComponent } from "../../../pop-ups/set-bid/set-bid.component";

@Component({
  selector: 'app-card-home',
  standalone: true,
  imports: [CommonModule, SetBidComponent],
  templateUrl: './card-home.component.html',
  styleUrl: './card-home.component.css'
})
export class CardHomeComponent {
  @Input() image!: string;
  @Input() description!: string;
  @Input() price!: string;
  @Input() productid!: string;
  @Input() city!: string;
  @Input() key!: number;
}
