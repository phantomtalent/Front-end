import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MastercardFraudReportListComponent} from './mastercard-fraud-report-list.component';

describe('MastercardFraudReportListComponent', () => {
  let component: MastercardFraudReportListComponent;
  let fixture: ComponentFixture<MastercardFraudReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastercardFraudReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastercardFraudReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
