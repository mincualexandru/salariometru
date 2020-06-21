import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstoricSalariiComponent } from './istoric-salarii.component';

describe('IstoricSalariiComponent', () => {
  let component: IstoricSalariiComponent;
  let fixture: ComponentFixture<IstoricSalariiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstoricSalariiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstoricSalariiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
