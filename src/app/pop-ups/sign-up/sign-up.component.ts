import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpService } from './sign-up.services'; 

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['../log-in/log-in.component.css'], 
})
export class SignUpComponent {
  data: any = {};
  myValues: any[] = [];
  agreeTerms: boolean = false;

  constructor(private http: HttpService) { } 

  onSubmit(form: NgForm) {
    if (form.invalid || !this.agreeTerms) {
      return;
    }
    this.myValues.push(this.data);
    this.addUser(); 
    this.reset(); 
  }

  reset() {
    this.data = {};
    this.agreeTerms = false;
  }

  addUser(): void {
    console.log(this.data);
    this.http.postData('http://localhost:5000/users', this.data).subscribe(
      response => {
        alert(response.message)
      },
      error => {
        console.error('Error adding user', error);
      }
    );
  }
}
