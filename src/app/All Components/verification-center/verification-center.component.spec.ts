import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationCenterComponent } from './verification-center.component';

describe('VerificationCenterComponent', () => {
  let component: VerificationCenterComponent;
  let fixture: ComponentFixture<VerificationCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificationCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
