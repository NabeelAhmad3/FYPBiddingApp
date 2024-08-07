import { CommonModule, } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatMenuModule, MatIconModule,],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() status!: string;
  @Input() ImgSrc!: string;
  @Input() CarName!: string;
  @Input() cBid!: string;
  @Input() strtIn!: string;
  @Input() eyeTxt!: number;
  @Input() key!: number;
}
