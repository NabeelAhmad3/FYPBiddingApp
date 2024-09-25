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
  userid: string | null;
  

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.editInfoForm = this.fb.group({
      carname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      price: ['', [Validators.required, Validators.min(100000), Validators.max(1000000000)]],
      cartype: ['', Validators.required],
      fueltype: ['', Validators.required],
      city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
    this.userid = localStorage.getItem('authUserId');
  }

  onSubmit() {
    if (this.editInfoForm.invalid) {
      this.editInfoForm.markAllAsTouched();
      return;
    }
      this.http.put<any>(`http://localhost:5000/products/updateProduct/172/${this.userid}`,{ ...this.editInfoForm.value }).subscribe(
        response => {
          alert(response.message);
          this.editInfoForm.reset();
        },
        error => {
          console.error('Error updating product', error);
        }
      );
    } 
  }

