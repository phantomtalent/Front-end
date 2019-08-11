/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WpfPaymentsAdditionalTransactionsComponent } from './wpf_payments-additional-transactions.component';

describe('WpfPaymentsAdditionalTransactionsComponent', () => {
  let component: WpfPaymentsAdditionalTransactionsComponent;
  let fixture: ComponentFixture<WpfPaymentsAdditionalTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpfPaymentsAdditionalTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpfPaymentsAdditionalTransactionsComponent);
    fixture = TestBed.createComponent(WpfPaymentsAdditionalTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
