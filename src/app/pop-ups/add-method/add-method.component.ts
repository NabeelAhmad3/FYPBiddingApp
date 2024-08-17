import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-method',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-method.component.html',
  styleUrls: ['./add-method.component.css']
})
export class AddMethodComponent {
  @Output() methodAdded = new EventEmitter<any>();
  addMethodForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addMethodForm = this.fb.group({
      withdrawMethod: ['', Validators.required],
      accountTitle: ['', [Validators.required, Validators.minLength(3)]], 
      accountType: ['', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(17),
        Validators.pattern(/^\d+$/) 
      ]],
    });
  }

  onSubmit() {
    if (this.addMethodForm.invalid) {
      this.addMethodForm.markAllAsTouched();
      return;
    }

    const formValue = this.addMethodForm.value;
    console.log('Method added:', formValue);
    this.methodAdded.emit(formValue);
    this.addMethodForm.reset();
  }
}
