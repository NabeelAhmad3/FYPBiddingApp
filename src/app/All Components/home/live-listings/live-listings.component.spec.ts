import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveListingsComponent } from './live-listings.component';

describe('LiveListingsComponent', () => {
  let component: LiveListingsComponent;
  let fixture: ComponentFixture<LiveListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveListingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
