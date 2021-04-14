import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverthtmltopdfComponent } from './converthtmltopdf.component';

describe('ConverthtmltopdfComponent', () => {
  let component: ConverthtmltopdfComponent;
  let fixture: ComponentFixture<ConverthtmltopdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConverthtmltopdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverthtmltopdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
