import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
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
  userid: string | null;
  @Input() selectedProductId: number | undefined;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.Bid = this.fb.group({
      price: ['', [Validators.required, Validators.min(100000), Validators.max(100000000)]]
    });
    this.userid = localStorage.getItem('authUserId');
  }

  onSubmit() {
    if (this.Bid.invalid) {
      this.Bid.markAllAsTouched();
      return;
    }

    if (!this.userid) {
      alert('User is not authenticated.');
      return;
    }

    const formValues = this.Bid.value;

    this.http.put(`http://localhost:5000/product_bid/createBid/${this.userid}/${this.selectedProductId}`, formValues).subscribe(
      (response: any) => {
        this.Bid.reset();
        alert(response.message);
      },
      (error: any) => {
        console.error('Error creating bid', error);
        alert('An error occurred. Please try again.');
      }
    );
  }
}
