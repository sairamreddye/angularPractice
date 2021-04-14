import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormspraticeComponent } from './formspratice.component';

describe('FormspraticeComponent', () => {
  let component: FormspraticeComponent;
  let fixture: ComponentFixture<FormspraticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormspraticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormspraticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
