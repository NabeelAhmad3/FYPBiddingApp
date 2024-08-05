import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveListingComponent } from './live-listing.component';

describe('LiveListingComponent', () => {
  let component: LiveListingComponent;
  let fixture: ComponentFixture<LiveListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
