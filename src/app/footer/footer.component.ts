import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [ReactiveFormsModule,CommonModule]
})
export class FooterComponent {
  footerForm: FormGroup =new FormGroup  ({
    Name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    Email: new FormControl('', [Validators.required,Validators.email,Validators.minLength(15),Validators.maxLength(35)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  constructor(private fb: FormBuilder, private http:HttpClient) {}

  onSubmit() {
    if (this.footerForm.invalid) {
      this.footerForm.markAllAsTouched();
      return;
    }

    const formValues = this.footerForm.value;
    this.http.post('http://localhost:5000/contact', this.footerForm.value)
    .subscribe({
      next: (response) => {
        console.log('Email sent successfully!', response);
        this.footerForm.reset();
      },
      error: (error) => {
        console.error('Error sending email:', error);
      }
    });
  }
}
