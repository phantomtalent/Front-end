import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VisaFraudReportComponent} from './visa-fraud-report.component';

describe('VisaFraudReportComponent', () => {
  let component: VisaFraudReportComponent;
  let fixture: ComponentFixture<VisaFraudReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaFraudReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaFraudReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
