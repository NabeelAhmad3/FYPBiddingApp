import { CommonModule } from '@angular/common';
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
    TextArea: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  constructor(private fb: FormBuilder) {
  
  }

  onSubmit() {
    if (this.footerForm.invalid) {
      this.footerForm.markAllAsTouched();
      return;
    }

    const formValues = this.footerForm.value;
    console.log('Form Submitted', formValues);
    this.footerForm.reset();
  }
}
