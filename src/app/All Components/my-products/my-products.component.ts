import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileModalComponent } from "../../pop-ups/profile-modal/profile-modal.component";
import { CardComponent } from '../card/card.component';
import { CardModel } from '../card/card.model';


@Component({
  selector: 'app-my-products',
  standalone: true,
  imports: [CommonModule, CardComponent, ProfileModalComponent],
  templateUrl: './my-products.component.html',
  styleUrl: './my-products.component.css'
})
export class MyProductsComponent {
  CarData: CardModel[] = [
    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 3423 },

    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg',  CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 343 },

    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 3423 },
    
    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 3423 },

    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 3423 },

    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 3423 },

    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 3423 },

    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 3423 },

    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 3423 },

    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 3423 },

    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 3423 },
  
    { status: "assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', CarName: 'Toyota Yaris', cBid: '4500000', strtIn: 'Pakistan',  eyeTxt: 3423 },
  ]
}
