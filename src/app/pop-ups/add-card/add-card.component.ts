import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent {
  @Output() cardAdded = new EventEmitter<any>(); // Event emitter to send data to parent component

  addCardForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [Validators.required,
    Validators.minLength(14),
    Validators.maxLength(17),
    Validators.pattern(/^\d+$/)]),
    cvv: new FormControl('', [Validators.required,
    Validators.minLength(3),
    Validators.maxLength(3),
    Validators.pattern(/^\d+$/)]),
    expiryDate: new FormControl('',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
        // Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/) // MM/YY format
      ]
    ),
    
  });

  formData: any = {};
  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if (this.addCardForm.invalid) {
      this.addCardForm.markAllAsTouched();
      return;
    }
    this.formData = this.addCardForm.value;
    this.cardAdded.emit(this.formData);
    this.addCardForm.reset();
  }
}
