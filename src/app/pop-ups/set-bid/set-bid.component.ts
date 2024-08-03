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
    myBid: new FormControl('', [Validators.required, Validators.min(200000), Validators.max(300000000)])
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.Bid.invalid) {
      this.Bid.markAllAsTouched();
      return;
    }

    const formValues = this.Bid.value;
    console.log('Form Submitted', formValues); // Check the console for form data
    alert("form submit successfully")
    this.Bid.reset();
  }
}
