import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaliiSalariuComponent } from './detalii-salariu.component';

describe('DetaliiSalariuComponent', () => {
  let component: DetaliiSalariuComponent;
  let fixture: ComponentFixture<DetaliiSalariuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaliiSalariuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaliiSalariuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
