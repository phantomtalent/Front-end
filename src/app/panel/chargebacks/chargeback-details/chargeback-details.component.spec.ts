import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChargebackDetailsComponent} from './chargeback-details.component';

describe('ChargebackDetailsComponent', () => {
  let component: ChargebackDetailsComponent;
  let fixture: ComponentFixture<ChargebackDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargebackDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargebackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
