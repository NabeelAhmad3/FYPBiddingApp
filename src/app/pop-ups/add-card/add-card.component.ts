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
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cvv: new FormControl('', [Validators.required, Validators.minLength(3)]),
    expiryDate: new FormControl('', [Validators.required, Validators.minLength(3)]),
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
