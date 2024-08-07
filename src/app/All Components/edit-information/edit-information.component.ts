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
  helpUsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.helpUsForm = this.fb.group({
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
    if (this.helpUsForm.invalid) {
      this.helpUsForm.markAllAsTouched();
      return;
    }
    console.log('Form Values:', this.helpUsForm.value);
    this.helpUsForm.reset();
  }
}
