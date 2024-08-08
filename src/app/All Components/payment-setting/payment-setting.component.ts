import { Component } from '@angular/core';
import { AddCardComponent } from "../../pop-ups/add-card/add-card.component";
import { AddMethodComponent } from "../../pop-ups/add-method/add-method.component";

@Component({
  selector: 'app-payment-setting',
  standalone: true,
  imports: [AddCardComponent, AddMethodComponent],
  templateUrl: './payment-setting.component.html',
  styleUrl: './payment-setting.component.css'
})
export class PaymentSettingComponent {

}
