import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  img=[
    {img1:'assets/car1.svg', img2:'assets/car2.svg',img3:'assets/car3.svg',}
  ]
productInfo=[
  { name:'car' , location:'pakistan', city:'islamabad',deliveryTo:'lahore', deliveryFee:'10000',basicPrice :'20000',sellerName:'nabeel',uploadDate:'3/3/2034'}
]
bidInfo=[
 { bidInfo:'live',startIn:'6hrs 2min 5sec',basicPrice:'535353',currentBid:'200000' ,placeBid:'PKR'}
]
description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae lacus tempor placerat.  Etiam vulputate neque nec nulla consequat, non cursus libero suscipit. Fusce tempor dapibus mauris, at vehicula ex lacinia eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae lacus tempor placerat. Etiam vulputate neque nec nulla consequat, non cursus libero suscipit. Fusce tempor dapibus mauris, at vehicula ex lacinia eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae lacus tempor placerat. Etiam vulputate neque nec nulla consequat, non cursus libero suscipit. Fusce tempor dapibus mauris, at vehicula ex lacinia eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae lacus tempor placerat. Etiam vulputate neque nec nulla consequat, non cursus libero suscipit. Fusce tempor dapibus mauris, at vehicula ex lacinia eu.';

}
