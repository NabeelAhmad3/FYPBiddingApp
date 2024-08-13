import { Component } from '@angular/core';

import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-filter-modal',
  standalone: true,
  imports: [ MatSliderModule],
  templateUrl: './filter-modal.component.html',
  styleUrl: './filter-modal.component.css'
})
export class FilterModalComponent {

}
