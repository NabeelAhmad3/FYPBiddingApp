import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FAQComponent {
  isAccordionOpen = [true, false, false, false]; // Initial state for each accordion item

  toggleAccordion(index: number) {
    this.isAccordionOpen = this.isAccordionOpen.map((_, i) => i === index ? !this.isAccordionOpen[i] : false);
  }
}
