import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.css'
})
export class AddCardComponent {
  addCardForm: FormGroup =new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cvv: new FormControl('', [Validators.required, Validators.minLength(3)]),
    expiryDate: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(private fb: FormBuilder){}
  onSubmit() {
    if (this.addCardForm.invalid) {
      this.addCardForm.markAllAsTouched();
      return;
    }
    console.log(this.addCardForm.value);
    this.addCardForm.reset();
  }
}
