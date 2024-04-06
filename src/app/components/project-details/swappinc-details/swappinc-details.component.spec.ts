import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwappincDetailsComponent } from './swappinc-details.component';

describe('SwappincDetailsComponent', () => {
  let component: SwappincDetailsComponent;
  let fixture: ComponentFixture<SwappincDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwappincDetailsComponent]
    });
    fixture = TestBed.createComponent(SwappincDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
