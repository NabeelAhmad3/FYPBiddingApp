import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    card_number: new FormControl('', [Validators.required,Validators.min(10000000000000),Validators.max(9999999999999999)]),
    cvv: new FormControl('', [Validators.required,Validators.min(100),Validators.max(999),]),
    expiry_date: new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(7)]),
    type: new FormControl('payment'), 
    method: new FormControl('bank transfer'), 
    userid: new FormControl('65'),

  });

  formData: any = {};
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  onSubmit() {
    if (this.addCardForm.invalid) {
      this.addCardForm.markAllAsTouched();
      return;
    }

  console.log('Form Data: ', this.formData);
    this.formData = this.addCardForm.value;
    this.cardAdded.emit(this.formData);
    this.onCardAdded(this.formData)
    this.addCardForm.reset();
  }
  onCardAdded(cardData: any) {
    this.http.post('http://localhost:5000/payment_setting', cardData)
      .subscribe(
        response => {
          console.log('Payment added successfully', response);
        },
        error => {
          console.error('Error adding payment', error);
        }
      );
  }

}
