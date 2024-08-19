import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-set-bid',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './set-bid.component.html',
  styleUrls: ['./set-bid.component.css']
})
export class SetBidComponent {
  Bid: FormGroup=new FormGroup({
    myBid: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.maxLength(6),
      Validators.pattern(/^\d+$/)])
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.Bid.invalid) {
      this.Bid.markAllAsTouched();
      return;
    }

    const formValues = this.Bid.value;
    console.log('Form Submitted', formValues); 
    this.Bid.reset();
  }
}
