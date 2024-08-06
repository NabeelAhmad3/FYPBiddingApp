import { Component } from '@angular/core';
import { CardComponent } from "../../card/card.component";
import { CommonModule } from '@angular/common';
import { CardModel } from '../../card/card.model';

@Component({
  selector: 'app-preview-orders',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './preview-orders.component.html',
  styleUrl: './preview-orders.component.css'
})
export class PreviewOrdersComponent {
  CarData: CardModel[] = [
    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 3423 },

    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg',  CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 343 },

    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 3423 },
    
    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 3423 },

    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 3423 },

    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 3423 },

    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 3423 },

    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 3423 },
 ]
}
