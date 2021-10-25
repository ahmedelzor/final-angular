import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatamanComponent } from './updataman.component';

describe('UpdatamanComponent', () => {
  let component: UpdatamanComponent;
  let fixture: ComponentFixture<UpdatamanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatamanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
