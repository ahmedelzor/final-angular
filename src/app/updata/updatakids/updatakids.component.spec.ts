import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatakidsComponent } from './updatakids.component';

describe('UpdatakidsComponent', () => {
  let component: UpdatakidsComponent;
  let fixture: ComponentFixture<UpdatakidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatakidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatakidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
