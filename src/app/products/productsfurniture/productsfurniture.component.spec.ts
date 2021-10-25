import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsfurnitureComponent } from './productsfurniture.component';

describe('ProductsfurnitureComponent', () => {
  let component: ProductsfurnitureComponent;
  let fixture: ComponentFixture<ProductsfurnitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsfurnitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsfurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
