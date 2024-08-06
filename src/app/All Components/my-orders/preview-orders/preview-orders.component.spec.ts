import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewOrdersComponent } from './preview-orders.component';

describe('PreviewOrdersComponent', () => {
  let component: PreviewOrdersComponent;
  let fixture: ComponentFixture<PreviewOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
