import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-set-bid',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './set-bid.component.html',
  styleUrls: ['./set-bid.component.css']
})
export class SetBidComponent {
  Bid: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.Bid = this.fb.group({
      price: ['', [Validators.required, Validators.min(100000), Validators.max(100000000)]]
    });
  }

  onSubmit() {
    if (this.Bid.invalid) {
      this.Bid.markAllAsTouched();
      return;
    }

    const formValues = this.Bid.value;
    this.http.put(`http://localhost:5000/product_bid/65/129`, formValues).subscribe(
      (response: any) => {
        console.log(response);
        this.Bid.reset(); 
        alert(response.message);
      },
      (error: any) => {
        console.error('Error creating bid', error);
      }
    );
  }
}
