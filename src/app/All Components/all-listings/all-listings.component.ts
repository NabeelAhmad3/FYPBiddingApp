import { Component } from '@angular/core';
import { FeaturesComponent } from "../../features/features.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-listings',
  standalone: true,
  imports: [FeaturesComponent,CommonModule],
  templateUrl: './all-listings.component.html',
  styleUrl: './all-listings.component.css'
})
export class AllListingsComponent {
  Card=[
    {CarName:'Toyota Yaris', rating:'4.6', available:'Available', sImg4:'assets/all7.svg',sTxt7:'120m(4min)', ImgSrc: 'assets/all1.svg', ImgAlt:'car', carClr:'1.5 Turbo Black Color' ,Price:'PKR: 50,00,000',sImg1:'assets/all4.svg',sTxt1:'petrol',sImg2:'assets/all5.svg' ,sTxt2:'Manual',sImg3:'assets/all6.svg',sTxt3:'Location'},
    {CarName:'Toyota Yaris', rating:'4.6', available:'Available', sImg4:'assets/all7.svg',sTxt7:'120m(4min)', ImgSrc: 'assets/all2.svg', ImgAlt:'car', carClr:'1.5 Turbo Black Color' ,Price:'PKR: 50,00,000',sImg1:'assets/all4.svg',sTxt1:'petrol',sImg2:'assets/all5.svg' ,sTxt2:'Manual',sImg3:'assets/all6.svg',sTxt3:'Location'},
    {CarName:'Toyota Yaris', rating:'4.6', available:'Available', sImg4:'assets/all7.svg',sTxt7:'120m(4min)', ImgSrc: 'assets/all3.svg', ImgAlt:'car', carClr:'1.5 Turbo Black Color' ,Price:'PKR: 50,00,000',sImg1:'assets/all4.svg',sTxt1:'petrol',sImg2:'assets/all5.svg' ,sTxt2:'Manual',sImg3:'assets/all6.svg',sTxt3:'Location'},
    {CarName:'Toyota Yaris', rating:'4.6', available:'Available', sImg4:'assets/all7.svg',sTxt7:'120m(4min)', ImgSrc: 'assets/all1.svg', ImgAlt:'car', carClr:'1.5 Turbo Black Color' ,Price:'PKR: 50,00,000',sImg1:'assets/all4.svg',sTxt1:'petrol',sImg2:'assets/all5.svg' ,sTxt2:'Manual',sImg3:'assets/all6.svg',sTxt3:'Location'},
    {CarName:'Toyota Yaris', rating:'4.6', available:'Available', sImg4:'assets/all7.svg',sTxt7:'120m(4min)', ImgSrc: 'assets/all2.svg', ImgAlt:'car', carClr:'1.5 Turbo Black Color' ,Price:'PKR: 50,00,000',sImg1:'assets/all4.svg',sTxt1:'petrol',sImg2:'assets/all5.svg' ,sTxt2:'Manual',sImg3:'assets/all6.svg',sTxt3:'Location'},
    {CarName:'Toyota Yaris', rating:'4.6', available:'Available', sImg4:'assets/all7.svg',sTxt7:'120m(4min)', ImgSrc: 'assets/all3.svg', ImgAlt:'car', carClr:'1.5 Turbo Black Color' ,Price:'PKR: 50,00,000',sImg1:'assets/all4.svg',sTxt1:'petrol',sImg2:'assets/all5.svg' ,sTxt2:'Manual',sImg3:'assets/all6.svg',sTxt3:'Location'},
    {CarName:'Toyota Yaris', rating:'4.6', available:'Available', sImg4:'assets/all7.svg',sTxt7:'120m(4min)', ImgSrc: 'assets/all1.svg', ImgAlt:'car', carClr:'1.5 Turbo Black Color' ,Price:'PKR: 50,00,000',sImg1:'assets/all4.svg',sTxt1:'petrol',sImg2:'assets/all5.svg' ,sTxt2:'Manual',sImg3:'assets/all6.svg',sTxt3:'Location'},
    {CarName:'Toyota Yaris', rating:'4.6', available:'Available', sImg4:'assets/all7.svg',sTxt7:'120m(4min)', ImgSrc: 'assets/all2.svg', ImgAlt:'car', carClr:'1.5 Turbo Black Color' ,Price:'PKR: 50,00,000',sImg1:'assets/all4.svg',sTxt1:'petrol',sImg2:'assets/all5.svg' ,sTxt2:'Manual',sImg3:'assets/all6.svg',sTxt3:'Location'},
    {CarName:'Toyota Yaris', rating:'4.6', available:'Available', sImg4:'assets/all7.svg',sTxt7:'120m(4min)', ImgSrc: 'assets/all3.svg', ImgAlt:'car', carClr:'1.5 Turbo Black Color' ,Price:'PKR: 50,00,000',sImg1:'assets/all4.svg',sTxt1:'petrol',sImg2:'assets/all5.svg' ,sTxt2:'Manual',sImg3:'assets/all6.svg',sTxt3:'Location'},
  
  ]
  

}
