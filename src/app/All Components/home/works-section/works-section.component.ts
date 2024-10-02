import { Component } from '@angular/core';
import { SignUpComponent } from "../../sign-up/sign-up.component";
import { HomeComponent } from "../home.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-works-section',
  standalone: true,
  imports: [SignUpComponent, HomeComponent,CommonModule],
  templateUrl: './works-section.component.html',
  styleUrl: './works-section.component.css'
})
export class WorksSectionComponent {
  isLoggedIn: boolean = false;
  Authdata: any = {};
constructor(){
  this.Authdata = {
    token: localStorage.getItem('authToken'),
    userid: localStorage.getItem('authUserId')
  };
  if (this.Authdata.token) {
    this.isLoggedIn = true;
  }
  
}
}
