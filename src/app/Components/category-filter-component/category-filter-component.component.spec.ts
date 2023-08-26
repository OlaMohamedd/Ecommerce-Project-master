import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFilterComponentComponent } from './category-filter-component.component';

describe('CategoryFilterComponentComponent', () => {
  let component: CategoryFilterComponentComponent;
  let fixture: ComponentFixture<CategoryFilterComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryFilterComponentComponent]
    });
    fixture = TestBed.createComponent(CategoryFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
