import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-information',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './edit-information.component.html',
  styleUrl: './edit-information.component.css'
})
export class EditInformationComponent {
  editInfoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editInfoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
      BasicPrice: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(10), Validators.pattern(/^\d+$/)]],
      city: ['', [Validators.required]],
      address: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      Description: ['']
    });
  }

  onSubmit() {
    if (this.editInfoForm.invalid) {
      this.editInfoForm.markAllAsTouched();
      return;
    }
    console.log('Form Values:', this.editInfoForm.value);
    this.editInfoForm.reset();
  }
}
