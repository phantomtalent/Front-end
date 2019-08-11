import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MastercardFraudReportComponent} from './mastercard-fraud-report.component';

describe('MastercardFraudReportComponent', () => {
  let component: MastercardFraudReportComponent;
  let fixture: ComponentFixture<MastercardFraudReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastercardFraudReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastercardFraudReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
