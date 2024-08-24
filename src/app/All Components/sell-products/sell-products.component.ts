import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sell-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sell-products.component.html',
  styleUrls: ['./sell-products.component.css']
})
export class SellProductsComponent {
  sellProducts: FormGroup;
  imageUrls: { [key: number]: string | ArrayBuffer | null } = {};

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.sellProducts = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      price: ['', [Validators.required, Validators.min(100000), Validators.max(100000000)]],
      cartype: ['', Validators.required],
      fueltype: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      description: [''],
      images: this.fb.array([''])
    });
  }

  onSubmit() {
    if (this.sellProducts.invalid) {
      this.sellProducts.markAllAsTouched();
      return;
    }
  
    this.http.post<any>('http://localhost:5000/products', { ...this.sellProducts.value, userid: 55 }).subscribe(
      response => {
        alert(response.message);
      },
      error => {
        console.error('Error adding product', error);
      }
    );

    const imagesArray = this.sellProducts.get('images') as FormArray;
    this.sellProducts.reset();
    this.imageUrls = {};
    while (imagesArray.length) {
      imagesArray.removeAt(0);
    }
  }

  onFileChange(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrls[index] = e.target.result;
        const imagesArray = this.sellProducts.get('images') as FormArray;
        if (imagesArray.length <= index) {
          imagesArray.push(this.fb.control(e.target.result));
        } else {
          imagesArray.at(index).setValue(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  }
}
