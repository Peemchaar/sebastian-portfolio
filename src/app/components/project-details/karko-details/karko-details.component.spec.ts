import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarkoDetailsComponent } from './karko-details.component';

describe('KarkoDetailsComponent', () => {
  let component: KarkoDetailsComponent;
  let fixture: ComponentFixture<KarkoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KarkoDetailsComponent]
    });
    fixture = TestBed.createComponent(KarkoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
