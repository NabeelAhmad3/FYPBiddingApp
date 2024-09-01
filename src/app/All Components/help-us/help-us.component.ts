import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-help-us',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './help-us.component.html',
  styleUrl: './help-us.component.css'
})
export class HelpUsComponent {
  helpUsForm: FormGroup =new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    subject: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    message: new FormControl('')
  });

  constructor(private fb: FormBuilder,private http:HttpClient){}
  onSubmit() {
    if (this.helpUsForm.invalid) {
      this.helpUsForm.markAllAsTouched();
      return;
    }
    this.http.post('http://localhost:5000/contact', this.helpUsForm.value)
    .subscribe((response) => {
        console.log('Email sent successfully!', response);
        this.helpUsForm.reset();
      },
      (error) => {
        console.error('Error sending email:', error);
      }
    );
  }
}
