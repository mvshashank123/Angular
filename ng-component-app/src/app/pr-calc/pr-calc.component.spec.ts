import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrCalcComponent } from './pr-calc.component';

describe('PrCalcComponent', () => {
  let component: PrCalcComponent;
  let fixture: ComponentFixture<PrCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
