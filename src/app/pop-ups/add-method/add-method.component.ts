import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-method',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-method.component.html',
  styleUrl: './add-method.component.css'
})
export class AddMethodComponent {
  addMethodForm: FormGroup =new FormGroup({
    withdrawMethod: new FormControl('', [Validators.required, Validators.minLength(3)]),
    chooseBank: new FormControl('', [Validators.required, Validators.minLength(3)]),
    accountTitle: new FormControl('', [Validators.required, Validators.minLength(3)]),
    accountType: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(private fb: FormBuilder){}
  onSubmit() {
    if (this.addMethodForm.invalid) {
      this.addMethodForm.markAllAsTouched();
      return;
    }
    console.log(this.addMethodForm.value);
    this.addMethodForm.reset();
  }
}
