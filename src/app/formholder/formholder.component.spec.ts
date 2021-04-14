import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormholderComponent } from './formholder.component';

describe('FormholderComponent', () => {
  let component: FormholderComponent;
  let fixture: ComponentFixture<FormholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
