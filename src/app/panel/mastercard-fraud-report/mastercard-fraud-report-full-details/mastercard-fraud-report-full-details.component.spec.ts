/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MastercardFraudReportFullDetailsComponent } from './mastercard-fraud-report-full-details.component';

describe('MastercardFraudReportFullDetailsComponent', () => {
  let component: MastercardFraudReportFullDetailsComponent;
  let fixture: ComponentFixture<MastercardFraudReportFullDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastercardFraudReportFullDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastercardFraudReportFullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
