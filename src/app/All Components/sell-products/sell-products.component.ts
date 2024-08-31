import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sell-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sell-products.component.html',
  styleUrls: ['./sell-products.component.css']
})
export class SellProductsComponent {
  sellProducts: FormGroup;
  imageUrls: string[] = [];
  imageUploadError = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.sellProducts = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      price: ['', [Validators.required, Validators.min(100000), Validators.max(100000000)]],
      cartype: ['', Validators.required],
      fueltype: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      description: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      images: this.fb.array(this.createImageControls()) 
    });
  }

  get images(): FormArray {
    return this.sellProducts.get('images') as FormArray;
  }
  createImageControls(): FormControl[] {
    const controls = [];
    for (let i = 0; i < 5; i++) {
      controls.push(this.fb.control('')); 
    }
    return controls;
  }
  

  onFileChange(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64String = e.target.result.split(',')[1]; 

        this.images.at(index).setValue(base64String);  
        this.imageUrls[index] = e.target.result;  
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.imageUploadError = this.imageUrls.filter(url => url).length < 3;

    if (this.sellProducts.invalid || this.imageUploadError) {
      this.sellProducts.markAllAsTouched();
      return;
    }
    this.http.post<any>('http://localhost:5000/products', { ...this.sellProducts.value, userid: 65 }).subscribe(
      response => {
        alert(response.message);
        this.sellProducts.reset(); 
        this.imageUrls = [];  
      },
      error => {
        console.error('Error adding product', error);
      }
    );
  }
}
