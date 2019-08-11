/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WpfPaymentsShippingDetailsComponent } from './wpf_payments-shipping-details.component';

describe('WpfPaymentsShippingDetailsComponent', () => {
  let component: WpfPaymentsShippingDetailsComponent;
  let fixture: ComponentFixture<WpfPaymentsShippingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpfPaymentsShippingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpfPaymentsShippingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
