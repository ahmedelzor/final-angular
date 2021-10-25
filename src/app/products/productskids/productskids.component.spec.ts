import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductskidsComponent } from './productskids.component';

describe('ProductskidsComponent', () => {
  let component: ProductskidsComponent;
  let fixture: ComponentFixture<ProductskidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductskidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductskidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
