import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbpiDetailsComponent } from './cbpi-details.component';

describe('CbpiDetailsComponent', () => {
  let component: CbpiDetailsComponent;
  let fixture: ComponentFixture<CbpiDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CbpiDetailsComponent]
    });
    fixture = TestBed.createComponent(CbpiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
