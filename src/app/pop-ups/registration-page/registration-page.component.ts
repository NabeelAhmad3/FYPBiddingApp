import { Component } from '@angular/core';
import { LogInComponent } from "../../All Components/log-in/log-in.component";
import { SignUpComponent } from "../../All Components/sign-up/sign-up.component";
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [LogInComponent, SignUpComponent,CommonModule,MatTabsModule],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {
  currentView: string = 'login';

  onTabChange(index: number): void {
    this.currentView = index === 0 ? 'login' : 'signup';
  }
}
