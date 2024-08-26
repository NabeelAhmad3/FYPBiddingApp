import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-information',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.css']
})
export class EditInformationComponent {
  editInfoForm: FormGroup;
  productId: number | null =35 ; 

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.editInfoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      price: ['', [Validators.required, Validators.min(100000), Validators.max(1000000000)]],
      cartype: ['', Validators.required],
      fueltype: ['', Validators.required],
      city: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['']
    });
  }

  onSubmit() {
    if (this.editInfoForm.invalid) {
      this.editInfoForm.markAllAsTouched();
      return;
    }
    if (this.productId) {
      const productData = { ...this.editInfoForm.value, userid: 55 };

      // Update product
      this.http.put<any>(`http://localhost:5000/products/${this.productId}`, productData).subscribe(
        response => {
          alert(response.message);
        },
        error => {
          console.error('Error updating product', error);
        }
      );
      this.editInfoForm.reset();
    } else {
      console.error('No product ID specified for update');
    }
  }
}
