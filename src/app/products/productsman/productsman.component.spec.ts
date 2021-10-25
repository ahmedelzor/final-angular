import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsmanComponent } from './productsman.component';

describe('ProductsmanComponent', () => {
  let component: ProductsmanComponent;
  let fixture: ComponentFixture<ProductsmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
