import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManComponent } from './add-man.component';

describe('AddManComponent', () => {
  let component: AddManComponent;
  let fixture: ComponentFixture<AddManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
