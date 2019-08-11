/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WpfPaymentsBillingDetailsComponent } from './wpf_payments-billing-details.component';

describe('WpfPaymentsBillingDetailsComponent', () => {
  let component: WpfPaymentsBillingDetailsComponent;
  let fixture: ComponentFixture<WpfPaymentsBillingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpfPaymentsBillingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpfPaymentsBillingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
