import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElupdataComponent } from './elupdata.component';

describe('ElupdataComponent', () => {
  let component: ElupdataComponent;
  let fixture: ComponentFixture<ElupdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElupdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElupdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
