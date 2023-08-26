import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceFilterComponentComponent } from './price-filter-component.component';

describe('PriceFilterComponentComponent', () => {
  let component: PriceFilterComponentComponent;
  let fixture: ComponentFixture<PriceFilterComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceFilterComponentComponent]
    });
    fixture = TestBed.createComponent(PriceFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
