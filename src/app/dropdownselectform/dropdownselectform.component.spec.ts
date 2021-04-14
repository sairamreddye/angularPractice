import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownselectformComponent } from './dropdownselectform.component';

describe('DropdownselectformComponent', () => {
  let component: DropdownselectformComponent;
  let fixture: ComponentFixture<DropdownselectformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownselectformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownselectformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
