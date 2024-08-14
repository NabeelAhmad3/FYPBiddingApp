import { CommonModule } from '@angular/common';
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
  contactForm: FormGroup;
  imageUrls: { [key: number]: string | ArrayBuffer | null } = {};

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      BasicPrice: ['', [Validators.required, Validators.minLength(3)]],
      AddCategories: ['', [Validators.required, Validators.minLength(3)]],
      QualityAvailable: ['', [Validators.required, Validators.minLength(3)]],
      CurrentLocation: ['', [Validators.required, Validators.minLength(3)]],
      DeliverToCities: ['', [Validators.required, Validators.minLength(3)]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      Description: [''],
      images: this.fb.array([])
    });
  }
  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    console.log('Form Values:', this.contactForm.value);
    const imagesArray = this.contactForm.get('images') as FormArray;
    console.log('Uploaded Image Paths:', imagesArray.value);
  
    this.contactForm.reset();
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
        const imagesArray = this.contactForm.get('images') as FormArray;
        if (imagesArray.length < index) {
          imagesArray.push(this.fb.control(e.target.result));
        } else {
          imagesArray.at(index).setValue(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  }
  
}
