import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'] 
})
export class ContactUsComponent {
  contactForm: FormGroup =new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    street: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(20),]),
    city: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20),]),
    postCode: new FormControl('', [Validators.required, Validators.min(10),Validators.max(100000000)]),
    phoneNo: new FormControl('', [Validators.required, Validators.min(1000000000),Validators.max(100000000000000)]),
    email: new FormControl('', [Validators.required, Validators.email,Validators.minLength(15),Validators.maxLength(35)]),
    message: new FormControl(''),
    terms: new FormControl(false, [Validators.requiredTrue])
  });

  constructor(private fb: FormBuilder){}
  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }
}
