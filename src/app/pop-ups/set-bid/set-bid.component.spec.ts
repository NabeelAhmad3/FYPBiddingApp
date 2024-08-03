import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetBidComponent } from './set-bid.component';

describe('SetBidComponent', () => {
  let component: SetBidComponent;
  let fixture: ComponentFixture<SetBidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetBidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
