import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-home.component.html',
  styleUrl: './card-home.component.css'
})
export class CardHomeComponent {
  @Input() ImgSrc!: string;
  @Input() des!: string;
  @Input() cBid!: string;
  @Input() pId!: string;
  @Input() lctn!: string;
  @Input() key!: number;
}
