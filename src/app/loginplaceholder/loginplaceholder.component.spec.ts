import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginplaceholderComponent } from './loginplaceholder.component';

describe('LoginplaceholderComponent', () => {
  let component: LoginplaceholderComponent;
  let fixture: ComponentFixture<LoginplaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginplaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginplaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
