import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-help-us',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './help-us.component.html',
  styleUrl: './help-us.component.css'
})
export class HelpUsComponent {
  helpUsForm: FormGroup =new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    subject: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(private fb: FormBuilder){}
  onSubmit() {
    if (this.helpUsForm.invalid) {
      this.helpUsForm.markAllAsTouched();
      return;
    }
    console.log(this.helpUsForm.value);
    this.helpUsForm.reset();
  }
}
