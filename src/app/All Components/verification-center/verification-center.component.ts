import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-verification-center',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verification-center.component.html',
  styleUrl: './verification-center.component.css'
})
export class VerificationCenterComponent {

  selectedImage1: string | ArrayBuffer | null = null;
  selectedImage2: string | ArrayBuffer | null = null;
  onFileSelected(event: any, imageSlot: string) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (imageSlot === 'image1') {
          this.selectedImage1 = reader.result;
        } else if (imageSlot === 'image2') {
          this.selectedImage2 = reader.result;
        }
        console.log('Image selected:', file);
      };
      reader.readAsDataURL(file);
    }
  }
  submitForm() {
    this.selectedImage1 = null;
    this.selectedImage2 = null;
    const fileInput1: HTMLInputElement = document.querySelector('#fileInput1')!;
    const fileInput2: HTMLInputElement = document.querySelector('#fileInput2')!;
    fileInput1.value = '';
    fileInput2.value = '';
  }
}
