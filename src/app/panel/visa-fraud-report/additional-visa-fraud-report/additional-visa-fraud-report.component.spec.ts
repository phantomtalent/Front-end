/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdditionalVisaFraudReportComponent } from './additional-visa-fraud-report.component';

describe('AdditionalVisaFraudReportComponent', () => {
  let component: AdditionalVisaFraudReportComponent;
  let fixture: ComponentFixture<AdditionalVisaFraudReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalVisaFraudReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalVisaFraudReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
