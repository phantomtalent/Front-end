import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VisaFraudReportListComponent} from './visa-fraud-report-list.component';

describe('VisaFraudReportListComponent', () => {
  let component: VisaFraudReportListComponent;
  let fixture: ComponentFixture<VisaFraudReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaFraudReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaFraudReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
