import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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
  profileImage: string | ArrayBuffer | null = null;
  profileSetForm: FormGroup;

  constructor(private fb: FormBuilder, private Http: HttpClient) {
    this.profileSetForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(15), Validators.maxLength(35)]],
      phone: ['', [Validators.required, Validators.min(1000000000), Validators.max(100000000000)]],
      cnic: ['', [Validators.required, Validators.min(1000000000), Validators.max(10000000000000)]],
      city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    });

    this.fetchUserData();
  }

  fetchUserData() {
    this.Http.get('http://localhost:5000/users/63').subscribe(
      (response: any) => {
        if (response && response.length > 0) {
          this.profileSetForm.patchValue({
            name: response[0].name,
            email: response[0].email,
            phone: response[0].phone,
            cnic: response[0].cnic,
            city: response[0].city,
            password: response[0].password
          });
        } 
      },
      (error: any) => {
        console.error('Error fetching user data', error);
      }
    );
  }
  onSubmit() {
    if (this.profileSetForm.invalid) {
      this.profileSetForm.markAllAsTouched();
      return;
    }
    this.Http.put('http://localhost:5000/users/63', this.profileSetForm.value).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.error('Error adding user', error);
      }
    )
    alert("Profile Updated  Successfully")
    const formData = {
      ...this.profileSetForm.value,
      profileImage: this.profileImage
    };
  }
  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImage = e.target.result;
        const imgElement = document.querySelector('.profile-picture') as HTMLImageElement;
        imgElement.src = this.profileImage as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  resetImage() {
    this.profileImage = null;
    const imgElement = document.querySelector('.profile-picture') as HTMLImageElement;
    imgElement.src = 'assets/Navbar2img.svg';
  }
}
