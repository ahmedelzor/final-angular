import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductswomanComponent } from './productswoman.component';

describe('ProductswomanComponent', () => {
  let component: ProductswomanComponent;
  let fixture: ComponentFixture<ProductswomanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductswomanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductswomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
