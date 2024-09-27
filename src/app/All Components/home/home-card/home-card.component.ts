import { Component, Input } from '@angular/core';
import { SetBidComponent } from "../../../pop-ups/set-bid/set-bid.component";

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [SetBidComponent],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css'
})
export class HomeCardComponent {
  @Input() image!: string;
  @Input() carname!: string;
  @Input() price!: number;
  @Input() productid!: number;
  @Input() city!: string;
  @Input() key!: number;

}
