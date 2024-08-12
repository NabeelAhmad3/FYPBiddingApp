import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { LogInComponent } from './pop-ups/log-in/log-in.component';
import { SignUpComponent } from './pop-ups/sign-up/sign-up.component';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { ProfileModalComponent } from "./pop-ups/profile-modal/profile-modal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogInComponent, SignUpComponent, HeaderComponent, FooterComponent, CommonModule, ProfileModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}

  isHomeRoute(): boolean {
    return this.router.url === '/';
  }
}
