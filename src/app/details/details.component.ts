import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardHomeComponent } from "../All Components/home/card-home/card-home.component";
import { myCardModel } from '../All Components/home/card-home/card-home.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, CardHomeComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae lacus tempor placerat.  Etiam vulputate neque nec nulla consequat, non cursus libero suscipit. Fusce tempor dapibus mauris, at vehicula ex lacinia eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae lacus tempor placerat. Etiam vulputate neque nec nulla consequat, non cursus libero suscipit. Fusce tempor dapibus mauris, at vehicula ex lacinia eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae lacus tempor placerat. Etiam vulputate neque nec nulla consequat, non cursus libero suscipit. Fusce tempor dapibus mauris, at vehicula ex lacinia eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae lacus tempor placerat. Etiam vulputate neque nec nulla consequat, non cursus libero suscipit. Fusce tempor dapibus mauris, at vehicula ex lacinia eu.';
  img=[
    {img1:'assets/car1.svg', img2:'assets/car2.svg',img3:'assets/car3.svg',}
  ]
productInfo=[
  { name:'car' , location:'pakistan', city:'islamabad',deliveryTo:'lahore', deliveryFee:'10000',basicPrice :'20000',sellerName:'nabeel',uploadDate:'3/3/2034'}
]
bidInfo=[
 { bidInfo:'live',startIn:'6hrs 2min 5sec',basicPrice:'535353',currentBid:'200000' ,placeBid:'PKR'}
]

cards: myCardModel[] = [
  { ImgSrc: 'assets/car1.svg',  des: 'BMW FASTEST', pId: 'Product ID:445588', cBid: 'Current Bid: PKR 5,855,000', lctn: 'Location: Lahore' },
  { ImgSrc: 'assets/car2.svg',  des: 'BMW NORMAL', pId: 'Product ID:455432', cBid: 'Current Bid: PKR 5,455,000', lctn: 'Location: Islamabad' },
  { ImgSrc: 'assets/car3.svg',  des: 'BMW GAMING', pId: 'Product ID:123332', cBid: 'Current Bid: PKR 5,335,500', lctn: 'Location: Karachi' },
  { ImgSrc: 'assets/car1.svg',  des: 'BMW FASTEST', pId: 'Product ID:445588', cBid: 'Current Bid: PKR 5,855,000', lctn: 'Location: Lahore' },
];

}
