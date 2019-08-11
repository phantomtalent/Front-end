import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MastercardFraudReportDetailsComponent} from './mastercard-fraud-report-details.component';

describe('MastercardFraudReportDetailsComponent', () => {
  let component: MastercardFraudReportDetailsComponent;
  let fixture: ComponentFixture<MastercardFraudReportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastercardFraudReportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastercardFraudReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
