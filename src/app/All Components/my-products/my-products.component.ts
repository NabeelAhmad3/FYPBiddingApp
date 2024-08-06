import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";
import { ProfileModalComponent } from "../../pop-ups/profile-modal/profile-modal.component";

@Component({
  selector: 'app-my-products',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './my-products.component.html',
  styleUrl: './my-products.component.css'
})
export class MyProductsComponent {
Card=[
  {status:"assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', ImgAlt:'car', CarName:'Toyota Yaris', cBid:'4500000', strtIn:'Pakistan' , eyeImg:'assets/myproeye.svg',eyeTxt:"Views (3423)"},
    
  {status:"assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', ImgAlt:'car', CarName:'Toyota Yaris', cBid:'4500000', strtIn:'Pakistan' , eyeImg:'assets/myproeye.svg',eyeTxt:"Views (3423)"},
  
  {status:"assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', ImgAlt:'car', CarName:'Toyota Yaris', cBid:'4500000', strtIn:'Pakistan' , eyeImg:'assets/myproeye.svg',eyeTxt:"Views (3423)"},
  
  {status:"assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', ImgAlt:'car', CarName:'Toyota Yaris', cBid:'4500000', strtIn:'Pakistan' , eyeImg:'assets/myproeye.svg',eyeTxt:"Views (3423)"},
  
  {status:"assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', ImgAlt:'car', CarName:'Toyota Yaris', cBid:'4500000', strtIn:'Pakistan' , eyeImg:'assets/myproeye.svg',eyeTxt:"Views (3423)"},
  
  {status:"assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', ImgAlt:'car', CarName:'Toyota Yaris', cBid:'4500000', strtIn:'Pakistan' , eyeImg:'assets/myproeye.svg',eyeTxt:"Views (3423)"},
  
  {status:"assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', ImgAlt:'car', CarName:'Toyota Yaris', cBid:'4500000', strtIn:'Pakistan' , eyeImg:'assets/myproeye.svg',eyeTxt:"Views (3423)"},
  
  {status:"assets/myprostatus.svg", ImgSrc: 'assets/all2.svg', ImgAlt:'car', CarName:'Toyota Yaris', cBid:'4500000', strtIn:'Pakistan' , eyeImg:'assets/myproeye.svg',eyeTxt:"Views (3423)"},
]
}
