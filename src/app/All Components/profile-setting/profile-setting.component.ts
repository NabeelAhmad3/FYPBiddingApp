import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-setting',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.css']
})
export class ProfileSettingComponent {
  profileSetForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    phoneNo: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern(/^\d+$/)]),
    address: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    country: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
  });

  profileImage: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.profileSetForm.invalid) {
      this.profileSetForm.markAllAsTouched();
      return;
    }
    
    const formData = {
      ...this.profileSetForm.value,
      profileImage: this.profileImage  // Include the image data in the form submission
    };
    
    console.log(formData);  
    this.profileSetForm.reset();
  }

  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImage = e.target.result;  // Store the image data
        const imgElement = document.querySelector('.profile-picture') as HTMLImageElement;
        imgElement.src = this.profileImage as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
