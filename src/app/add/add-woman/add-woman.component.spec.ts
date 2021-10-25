import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWomanComponent } from './add-woman.component';

describe('AddWomanComponent', () => {
  let component: AddWomanComponent;
  let fixture: ComponentFixture<AddWomanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWomanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
