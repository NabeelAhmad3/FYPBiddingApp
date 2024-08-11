import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseBidComponent } from './purchase-bid.component';

describe('PurchaseBidComponent', () => {
  let component: PurchaseBidComponent;
  let fixture: ComponentFixture<PurchaseBidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseBidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
