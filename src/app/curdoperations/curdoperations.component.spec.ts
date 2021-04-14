import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdoperationsComponent } from './curdoperations.component';

describe('CurdoperationsComponent', () => {
  let component: CurdoperationsComponent;
  let fixture: ComponentFixture<CurdoperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurdoperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdoperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
