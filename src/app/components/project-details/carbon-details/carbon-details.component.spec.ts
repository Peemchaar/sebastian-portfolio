import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonDetailsComponent } from './carbon-details.component';

describe('CarbonDetailsComponent', () => {
  let component: CarbonDetailsComponent;
  let fixture: ComponentFixture<CarbonDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarbonDetailsComponent]
    });
    fixture = TestBed.createComponent(CarbonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
