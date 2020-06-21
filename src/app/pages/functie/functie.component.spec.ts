import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctieComponent } from './functie.component';

describe('FunctieComponent', () => {
  let component: FunctieComponent;
  let fixture: ComponentFixture<FunctieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
