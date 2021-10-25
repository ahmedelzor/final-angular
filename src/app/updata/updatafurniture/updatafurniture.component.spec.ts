import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatafurnitureComponent } from './updatafurniture.component';

describe('UpdatafurnitureComponent', () => {
  let component: UpdatafurnitureComponent;
  let fixture: ComponentFixture<UpdatafurnitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatafurnitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatafurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
