import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, JsonPipe, ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;
  googleLogUrl = 'https://www.google.com/login/';
  facebookLogUrl = 'https://www.facebook.com/login/';
  Authdata: any;
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const formData = this.loginForm.value;
    this.http.post('http://localhost:5000/users/login', formData).subscribe({
      next: (response: any) => {
        // console.log(response.token);

        if (response.token) {
          localStorage.setItem('authToken', response.token);
        }
        if (response.userid) {
          localStorage.setItem('authUserId', response.userid);
        }
        this.Authdata = {
          token: localStorage.getItem('authToken'),
          userid: localStorage.getItem('authUserId')
        };
        // console.log(this.Authdata);
        alert(response.message);
        window.location.reload();
        // this.loginForm.reset();

        // Reload to reflect the login state
      },
      error: (error: any) => {
        alert(error.error.message || 'An error occurred during login');
      },
    });
  }

}