import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatawomanComponent } from './updatawoman.component';

describe('UpdatawomanComponent', () => {
  let component: UpdatawomanComponent;
  let fixture: ComponentFixture<UpdatawomanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatawomanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatawomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
