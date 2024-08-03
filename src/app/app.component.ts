import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogInComponent } from './pop-ups/log-in/log-in.component';
import { SignUpComponent } from './pop-ups/sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogInComponent, SignUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
}
