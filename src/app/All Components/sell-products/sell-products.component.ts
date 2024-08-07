import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sell-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sell-products.component.html',
  styleUrls: ['./sell-products.component.css']
})
export class SellProductsComponent {
  contactForm: FormGroup;
  fileControls: string[] = ['file1', 'file2', 'file3', 'file4', 'file5']; // Define as many file inputs as needed
  imagePreviews: string[] = [];

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
      Description: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    console.log('Form Values:', this.contactForm.value);
    console.log('Image Previews:', this.imagePreviews);
    this.contactForm.reset();
    this.imagePreviews = [];
  }

  onFileChange(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreviews[index] = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
