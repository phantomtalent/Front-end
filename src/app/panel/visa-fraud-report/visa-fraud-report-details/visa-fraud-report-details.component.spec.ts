import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VisaFraudReportDetailsComponent} from './visa-fraud-report-details.component';

describe('VisaFraudReportDetailsComponent', () => {
  let component: VisaFraudReportDetailsComponent;
  let fixture: ComponentFixture<VisaFraudReportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaFraudReportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaFraudReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
