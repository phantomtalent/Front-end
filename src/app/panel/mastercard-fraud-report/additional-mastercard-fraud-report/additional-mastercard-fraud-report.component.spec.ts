/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdditionalMastercardFraudReportComponent } from './additional-mastercard-fraud-report.component';

describe('AdditionalMastercardFraudReportComponent', () => {
  let component: AdditionalMastercardFraudReportComponent;
  let fixture: ComponentFixture<AdditionalMastercardFraudReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalMastercardFraudReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalMastercardFraudReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
