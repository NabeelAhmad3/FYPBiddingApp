import { Component } from '@angular/core';
import { myCardModel } from '../card-home/card-home.model';
import { CommonModule } from '@angular/common';
import { CardHomeComponent } from '../card-home/card-home.component';

@Component({
  selector: 'app-feature-products',
  standalone: true,
  imports: [CommonModule,CardHomeComponent],
  templateUrl: './feature-products.component.html',
  styleUrl: '../../home/live-listings/live-listings.component.css'
})
export class FeatureProductsComponent {
  cards: myCardModel[] = [
    { ImgSrc: 'assets/car1.svg',  des: 'BMW FASTEST', pId: 'Product ID:445588', cBid: 'Current Bid: PKR 5,855,000', lctn: 'Location: Lahore' },
    { ImgSrc: 'assets/car2.svg',  des: 'BMW NORMAL', pId: 'Product ID:455432', cBid: 'Current Bid: PKR 5,455,000', lctn: 'Location: Islamabad' },
    { ImgSrc: 'assets/car3.svg',  des: 'BMW GAMING', pId: 'Product ID:123332', cBid: 'Current Bid: PKR 5,335,500', lctn: 'Location: Karachi' },
    { ImgSrc: 'assets/car1.svg', des: 'BMW FASTEST', pId: 'Product ID:445588', cBid: 'Current Bid: PKR 5,855,000', lctn: 'Location: Lahore' },
    { ImgSrc: 'assets/car1.svg',  des: 'BMW FASTEST', pId: 'Product ID:445588', cBid: 'Current Bid: PKR 5,855,000', lctn: 'Location: Lahore' },
    { ImgSrc: 'assets/car2.svg',  des: 'BMW NORMAL', pId: 'Product ID:455432', cBid: 'Current Bid: PKR 5,455,000', lctn: 'Location: Islamabad' },
    { ImgSrc: 'assets/car3.svg',  des: 'BMW GAMING', pId: 'Product ID:123332', cBid: 'Current Bid: PKR 5,335,500', lctn: 'Location: Karachi' },
    { ImgSrc: 'assets/car1.svg', des: 'BMW FASTEST', pId: 'Product ID:445588', cBid: 'Current Bid: PKR 5,855,000', lctn: 'Location: Lahore' },
  
  ];
}
