import { Component } from '@angular/core';
import { CardModel } from '../../card/card.model';
import { CardComponent } from "../../card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-wins',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './recent-wins.component.html',
  styleUrl: './recent-wins.component.css'
})
export class RecentWinsComponent {
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
