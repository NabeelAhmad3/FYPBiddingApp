import { Component } from '@angular/core';
import { FeaturesComponent } from "../../features/features.component";
import { CommonModule } from '@angular/common';
import { FilterModalComponent } from "../../pop-ups/filter-modal/filter-modal.component";

@Component({
  selector: 'app-all-listings',
  standalone: true,
  imports: [FeaturesComponent, CommonModule, FilterModalComponent],
  templateUrl: './all-listings.component.html',
  styleUrl: './all-listings.component.css'
})
export class AllListingsComponent {
  Card=[
    
    { walkicon:'assets/all7.svg', walk:'120m(4min)', status:'Available', ImgSrc: 'assets/all1.svg',CarName:'Toyota Yaris', carClr:'1.5 Turbo Black Color' ,price:'PKR: 50,00,000',fuelicon:'assets/all4.svg',fueltype:'petrol',caricon:'assets/all5.svg' ,cartype:'Manual',locationicon:'assets/all6.svg',city:'Location'},
    
    { walkicon:'assets/all7.svg', walk:'120m(4min)', status:'Available', ImgSrc: 'assets/all1.svg',CarName:'Toyota Yaris', carClr:'1.5 Turbo Black Color' ,price:'PKR: 50,00,000',fuelicon:'assets/all4.svg',fueltype:'petrol',caricon:'assets/all5.svg' ,cartype:'Manual',locationicon:'assets/all6.svg',city:'Location'},
    
    { walkicon:'assets/all7.svg', walk:'120m(4min)', status:'Available', ImgSrc: 'assets/all1.svg',CarName:'Toyota Yaris', carClr:'1.5 Turbo Black Color' ,price:'PKR: 50,00,000',fuelicon:'assets/all4.svg',fueltype:'petrol',caricon:'assets/all5.svg' ,cartype:'Manual',locationicon:'assets/all6.svg',city:'Location'},
    
    { walkicon:'assets/all7.svg', walk:'120m(4min)', status:'Available', ImgSrc: 'assets/all1.svg',CarName:'Toyota Yaris', carClr:'1.5 Turbo Black Color' ,price:'PKR: 50,00,000',fuelicon:'assets/all4.svg',fueltype:'petrol',caricon:'assets/all5.svg' ,cartype:'Manual',locationicon:'assets/all6.svg',city:'Location'},
    
    { walkicon:'assets/all7.svg', walk:'120m(4min)', status:'Available', ImgSrc: 'assets/all1.svg',CarName:'Toyota Yaris', carClr:'1.5 Turbo Black Color' ,price:'PKR: 50,00,000',fuelicon:'assets/all4.svg',fueltype:'petrol',caricon:'assets/all5.svg' ,cartype:'Manual',locationicon:'assets/all6.svg',city:'Location'},
    
    { walkicon:'assets/all7.svg', walk:'120m(4min)', status:'Available', ImgSrc: 'assets/all1.svg',CarName:'Toyota Yaris', carClr:'1.5 Turbo Black Color' ,price:'PKR: 50,00,000',fuelicon:'assets/all4.svg',fueltype:'petrol',caricon:'assets/all5.svg' ,cartype:'Manual',locationicon:'assets/all6.svg',city:'Location'},
    
    { walkicon:'assets/all7.svg', walk:'120m(4min)', status:'Available', ImgSrc: 'assets/all1.svg',CarName:'Toyota Yaris', carClr:'1.5 Turbo Black Color' ,price:'PKR: 50,00,000',fuelicon:'assets/all4.svg',fueltype:'petrol',caricon:'assets/all5.svg' ,cartype:'Manual',locationicon:'assets/all6.svg',city:'Location'},
    
  ]
}
