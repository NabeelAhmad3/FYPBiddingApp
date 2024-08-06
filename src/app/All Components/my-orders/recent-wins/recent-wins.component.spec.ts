import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentWinsComponent } from './recent-wins.component';

describe('RecentWinsComponent', () => {
  let component: RecentWinsComponent;
  let fixture: ComponentFixture<RecentWinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentWinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
