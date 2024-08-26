import { CommonModule, } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { SetBidComponent } from "../../pop-ups/set-bid/set-bid.component";


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatMenuModule, SetBidComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
constructor(){}
  @Input() status!: string;
  @Input() ImgSrc!: string;
  @Input() CarName!: string;
  @Input() cBid!: string;
  @Input() strtIn!: string;
  @Input() eyeTxt!: number;
  @Input() key!: number;
  @Input() isRecentWinsComponent: boolean = true;

}
